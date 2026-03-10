Param(
    [string]$RepoRoot = (Get-Location).Path,
    [int]$StaleMinutes = 10,
    [switch]$Force
)

function Resolve-GitDir {
    param($repoRoot)
    $gitPath = Join-Path $repoRoot '.git'
    if (-not (Test-Path $gitPath)) {
        Write-Error ".git not found at $gitPath"
        return $null
    }

    if (Test-Path $gitPath -PathType Leaf) {
        # .git is a file that points to the real gitdir (worktree/submodule)
        $text = Get-Content $gitPath -Raw
        if ($text -match 'gitdir:\s*(.+)') {
            $gitdir = $matches[1].Trim()
            if (-not [System.IO.Path]::IsPathRooted($gitdir)) {
                $gitdir = Join-Path $repoRoot $gitdir
            }
            return (Resolve-Path -Path $gitdir).Path
        } else {
            Write-Error ".git is a file but doesn't contain a gitdir: pointer"
            return $null
        }
    } else {
        return (Resolve-Path -Path $gitPath).Path
    }
}

Write-Host "Repository root: $RepoRoot"
$gitDir = Resolve-GitDir -repoRoot $RepoRoot
if (-not $gitDir) { exit 2 }
Write-Host "Resolved .git directory: $gitDir"

$lockPath = Join-Path $gitDir 'index.lock'
if (-not (Test-Path $lockPath)) {
    Write-Host "No index.lock found at $lockPath. Nothing to do."
    exit 0
}

$lockItem = Get-Item $lockPath
$ageMinutes = ((Get-Date) - $lockItem.LastWriteTime).TotalMinutes
Write-Host "Found lock: $lockPath (LastWriteTime: $($lockItem.LastWriteTime), Age: $([math]::Round($ageMinutes,2)) minutes)"

# Check for running git processes
$gitProcs = Get-Process -Name git -ErrorAction SilentlyContinue
if ($gitProcs) {
    Write-Host "Detected running git process(es):"
    $gitProcs | Format-Table Id,ProcessName,StartTime -AutoSize
    Write-Host "Aborting removal because git processes are active. Close them or try again later."
    exit 3
}

if (-not $Force -and $ageMinutes -lt $StaleMinutes) {
    Write-Host "Lock is younger than $StaleMinutes minutes (age: $([math]::Round($ageMinutes,2))m)."
    $response = Read-Host "Remove it anyway? (y/N)"
    if ($response -notin @('y','Y','yes','Yes')) {
        Write-Host "Aborting per user input."
        exit 4
    }
}

# Backup then remove
$bakPath = "$lockPath.bak.$((Get-Date).ToString('yyyyMMddHHmmss'))"
Copy-Item -Path $lockPath -Destination $bakPath -Force
Write-Host "Backed up lock to: $bakPath"

Remove-Item -Path $lockPath -Force
if (-not (Test-Path $lockPath)) {
    Write-Host "index.lock removed successfully. Running 'git status' to verify..."
    try {
        Push-Location $RepoRoot
        & git status
        Pop-Location
    } catch {
        Write-Warning "Failed to run 'git status' (git may not be on PATH in this environment)."
    }
    exit 0
} else {
    Write-Error "Failed to remove $lockPath"
    exit 5
}
