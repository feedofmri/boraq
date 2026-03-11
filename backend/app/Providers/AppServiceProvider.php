<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        // Force HTTPS in production (cPanel terminates SSL before PHP sees the request)
        // Also detect HTTPS via X-Forwarded-Proto from proxy
        $isHttps = $this->app->environment('production')
            || str_starts_with(config('app.url'), 'https')
            || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https')
            || (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on');

        if ($isHttps) {
            URL::forceScheme('https');
        }
    }
}

