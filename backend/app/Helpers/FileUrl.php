<?php

namespace App\Helpers;

class FileUrl
{
    /**
     * Build the absolute public URL for a file stored in storage/app/public.
     *
     * Uses APP_URL from .env, and ensures the scheme matches the current
     * request (e.g. always HTTPS in production even if APP_URL says http).
     * Also detects HTTPS behind cPanel/proxy SSL termination.
     *
     * @param  string|null  $path  Relative path, e.g. "team/md-rubayet-islam.jpg"
     * @return string|null         Absolute URL, e.g. "https://api.boraq.io/api/files/team/md-rubayet-islam.jpg"
     */
    public static function url(?string $path): ?string
    {
        if (!$path) {
            return null;
        }

        $base = rtrim(config('app.url'), '/');

        // Detect if we should use HTTPS:
        // 1. APP_URL already says https
        // 2. APP_ENV is production
        // 3. The current request is over HTTPS (direct or via proxy)
        $shouldBeHttps = str_starts_with($base, 'https')
            || app()->environment('production')
            || self::isRequestSecure();

        if ($shouldBeHttps) {
            $base = preg_replace('/^http:\/\//', 'https://', $base);
        }

        return $base . '/api/files/' . ltrim($path, '/');
    }

    /**
     * Check if the current request is secure, including behind proxies.
     */
    private static function isRequestSecure(): bool
    {
        try {
            $request = request();
            if (!$request) {
                return false;
            }

            // Direct HTTPS
            if ($request->secure()) {
                return true;
            }

            // Behind proxy (cPanel, Cloudflare, etc.)
            $forwardedProto = $request->header('X-Forwarded-Proto');
            if ($forwardedProto && strtolower($forwardedProto) === 'https') {
                return true;
            }

            return false;
        } catch (\Throwable $e) {
            return false;
        }
    }
}


