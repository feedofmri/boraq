#!/usr/bin/env bash
# Template deploy script for cPanel (manual/SSH)
# NOTE: Adapt the paths and user to your cPanel environment.

set -euo pipefail

echo "This is a template. Edit paths before running."

# Example: deploy backend (Laravel)
# 1) Upload backend files to /home/username/api.boraq.io
# 2) Ensure document root for api.boraq.io points to /home/username/api.boraq.io/public
# Then run the following from the project root (/home/username/api.boraq.io):
# composer install --no-dev --optimize-autoloader
# cp .env.example .env
# php artisan key:generate
# php artisan migrate --force
# php artisan storage:link
# chown -R $USER:$USER storage bootstrap/cache
# chmod -R ug+rwx storage bootstrap/cache

# Example: build frontend
# cd frontend
# cp .env.production .env.production
# npm ci
# npm run build
# upload contents of dist/ to the document root of www.boraq.io

# Example: build frontend-crm
# cd frontend-crm
# cp .env.production .env.production
# npm ci
# npm run build
# upload contents of dist/ to the document root of crm.boraq.io

echo "Done. Edit and run the script after customizing it for your server."

