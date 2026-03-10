# Deployment guide — cPanel

This document explains how to deploy the three parts of this project to cPanel-hosted subdomains:

- Frontend (public website): https://www.boraq.io
- Backend API (Laravel): https://www.api.boraq.io
- Frontend CRM (Admin SPA): https://www.crm.boraq.io

> IMPORTANT: PHP version requirement
> ---------------------------------
> Recent Composer dependencies for this project require PHP >= 8.4.0. If your cPanel server is currently running PHP 8.3.x (for example the error you saw: running 8.3.30), you'll need to upgrade the PHP version for the `api.boraq.io` site to at least 8.4.0 before running `composer install` on the server.
>
> Two safe options:
> 1. Upgrade PHP on cPanel (recommended). See steps below.
> 2. If you cannot upgrade the server PHP, build the backend `vendor/` locally (or in CI) using PHP 8.4+ and upload the prepared project (including `vendor/`) to the server. Details and commands provided later in this file.

Overview
--------
- The frontends are Vite-built React SPAs. Build them and upload the generated `dist` (or `build`) static files to the document root for their subdomain.
- The backend is a Laravel app; on cPanel you'll deploy it to the subdomain document root, configure PHP version (>=8.4), put the Laravel `public/` directory as the web root, then run composer install and any migrations.

Notes about domains and SSL
---------------------------
- Create the three subdomains in cPanel and ensure each has a valid SSL certificate (AutoSSL or Let's Encrypt via cPanel).
- For the API, you'll want CORS properly configured (see backend `.env` settings).

Frontend (www.boraq.io)
-----------------------
1. Build the site locally or in CI:

   - In `frontend/` copy `.env.production.example` to `.env.production` and update `VITE_API_URL=https://api.boraq.io` if needed.
   - Run `npm install` and `npm run build`.
   - The output folder is `dist/`.

2. Upload `dist/` contents to the document root of `www.boraq.io` (usually `public_html` or a subfolder specified when creating the subdomain).

3. Add an `.htaccess` file to the site's root to rewrite all requests to `index.html` (SPA fallback). Example below.

Frontend CRM (www.crm.boraq.io)
-------------------------------
1. In `frontend-crm/` copy `.env.production.example` to `.env.production` and set `VITE_CRM_API=https://api.boraq.io`.
2. Run `npm install` and `npm run build`.
3. Upload the build `dist/` contents to the document root of `crm.boraq.io`.
4. Add the SPA `.htaccess` (same as front) to enable client-side routing.

Backend API (www.api.boraq.io)
-----------------------------
1. On cPanel, create the subdomain `api.boraq.io` and set the document root to point to the `backend/public` directory (recommended). If cPanel doesn't allow pointing to a nested folder, you can place the contents of `backend/public` into the subdomain root and adjust paths — but prefer using the `public` folder as the web root.

2. Upload the `backend/` project files (all files) to the server. Ensure the server uses PHP 8.4+.

3. On the server (cPanel terminal or SSH if available):

   - cd to the project root (where `composer.json` is located)
   - run `composer install --no-dev --optimize-autoloader`
   - copy `.env.example` to `.env` and set values (APP_URL, DB_*, MAIL_*, SANCTUM state if needed)
   - run `php artisan key:generate`
   - set storage permissions: `chown -R youruser:youruser storage bootstrap/cache` and `chmod -R ug+rwx storage bootstrap/cache`
   - if database is configured, run `php artisan migrate --force` and `php artisan db:seed --force` if you want seed data

4. Ensure `storage/app/public` is writable and that files are served (you can use symbolic link `php artisan storage:link` if symlinks are allowed).

5. Configure `.htaccess` in `backend/public` for typical Laravel routing (Laravel already includes it).

PHP upgrade on cPanel (recommended)
-----------------------------------
If your cPanel server shows PHP 8.3.x, upgrade to PHP 8.4+ for `api.boraq.io`:

- Login to cPanel.
- Open "MultiPHP Manager" (or "Select PHP Version" depending on hosting).
- Find the `api.boraq.io` subdomain and select PHP 8.4 (or a newer supported version).
- Apply the change and confirm with `php -v` in cPanel Terminal or check a `phpinfo()` page.

If you don't see PHP 8.4 in the UI, contact your hosting provider to enable it or move to an environment that provides PHP 8.4+.

Workarounds if you cannot upgrade PHP on the server
--------------------------------------------------
A. Build `vendor/` locally (recommended alternative)

1. On a local machine (or CI runner) that has PHP 8.4+ installed, do the following from the `backend/` folder:

```powershell
# Windows / PowerShell example (run from backend/)
php -v    # confirm PHP 8.4+
composer install --no-dev --optimize-autoloader
composer dump-autoload --optimize
npm --version || true
```

2. Upload the entire project (including the generated `vendor/` directory) to the cPanel server, ensuring the `public/` directory is the web root for `api.boraq.io`.

3. On the server, set file permissions and environment `.env`, then run `php artisan key:generate` and `php artisan migrate --force` (if you have SSH or cPanel Terminal). If you cannot run migrations via SSH, see the project's `run-migrations.php` script for a possible HTTP-triggered migration (use cautiously and secure it).

B. Use a Composer Docker image to build vendor (cross-platform)

If you don't have PHP 8.4 locally, use Docker's official composer image to build dependencies in a container and produce the `vendor/` folder to upload:

```bash
# From the backend project root on a machine with Docker installed:
# mount current dir into /app in the container and run composer
docker run --rm -v "$PWD":/app -w /app composer:2.6 php -v
docker run --rm -v "$PWD":/app -w /app composer:2.6 install --no-dev --optimize-autoloader
```

C. Server-side temporary bypass (not recommended)

You can run composer on the server with `--ignore-platform-reqs` to bypass the PHP version check, but this is risky if packages actually need newer PHP features. Use only as a last resort and test thoroughly:

```bash
composer install --no-dev --optimize-autoloader --ignore-platform-reqs
```

Troubleshooting & verification
------------------------------
- Verify PHP version on the server:

```bash
# cPanel Terminal or SSH
php -v
```

- Verify Composer recognizes PHP 8.4+ locally before creating `vendor/`:

```bash
php -v
composer -V
composer check-platform-reqs
```

- After uploading vendor and files, ensure permissions:

```bash
# On server (SSH / cPanel Terminal)
cd /home/youruser/api.boraq.io
chown -R youruser:youruser storage bootstrap/cache vendor
chmod -R ug+rwx storage bootstrap/cache
```

API CORS & Sanctum
------------------
- If using Sanctum and cookies, there are additional steps for cookie domain and CSRF endpoints. This project uses token-based auth for the admin SPA (localStorage bearer tokens), so ensure the SPA uses the API domain exactly and that `SANCTUM_STATEFUL_DOMAINS` includes the CRM domain if you use cookie-based auth.

SPA .htaccess (place in the root of each SPA, i.e., where index.html is)
---------------------------------------------------------------------
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  # Serve existing files if present
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # All other requests go to index.html
  RewriteRule ^ index.html [L]
</IfModule>
```

Environment & runtime config
----------------------------
- The frontends use build-time env variables (Vite): `VITE_API_URL` and `VITE_CRM_API`. Ensure you set them before building.
- If you need runtime-configurable API endpoints, consider adding a small `config.json` fetched at runtime, or embed runtime vars into the served `index.html` with server-side templates.

Checklist before going live
---------------------------
- [ ] Create subdomains and point DNS
- [ ] Upload built SPA files and add SPA .htaccess
- [ ] Upload Laravel app, set PHP version
- [ ] composer install and env configuration
- [ ] run migrations and storage link
- [ ] test public site, API endpoints, and CRM login

If you want I can:
- Add `.env.production.example` files (done).
- Add the SPA `.htaccess` files under each frontend `dist` target (I can create examples in the repo).
- Create a small deploy script for use with cPanel's Git or manual upload.
