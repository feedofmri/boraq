<?php

return [
    'paths' => ['api/*', 'storage/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => [
        // Local dev servers
        'http://localhost:5173',
        'http://localhost:5174',
        'http://localhost:3000',
        'http://127.0.0.1:5173',
        'http://127.0.0.1:5174',
        // Production frontends
        'https://boraq.io',
        'https://www.boraq.io',
        // Admin/CRM
        'https://crm.boraq.io',
        'https://www.crm.boraq.io',
        // API itself (for same-origin requests)
        'https://api.boraq.io',
        'https://www.api.boraq.io',
    ],
    'allowed_origins_patterns' => [
        '#^https://(.+\.)?boraq\.io$#',
    ],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 86400,
    'supports_credentials' => true,
];
