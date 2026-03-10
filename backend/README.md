# Boraq Backend API (Laravel + MySQL)

## Setup Instructions

### 1. Prerequisites
- PHP 8.2+
- Composer
- MySQL 8.0+

### 2. Install Dependencies
```bash
cd backend
composer install
```

### 3. Environment Configuration
```bash
cp .env.example .env
php artisan key:generate
```

Edit `.env` and set your MySQL credentials:
```
DB_DATABASE=boraq
DB_USERNAME=root
DB_PASSWORD=your_password
```

### 4. Create MySQL Database
```sql
CREATE DATABASE boraq CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 5. Run Migrations & Seed Data
```bash
php artisan migrate --seed
```

### 6. Copy Image Assets
Run the asset migration script to copy images from the frontend:
```bash
php artisan app:migrate-assets
```

Or manually copy:
- `frontend/src/assets/Team/*.jpg` → `backend/storage/app/public/team/`
  - Rename: `Md Rubayet Islam - Founder CEO.jpg` → `md-rubayet-islam.jpg`
  - Rename: `Rakib Hasan - Chief Technology Officer.jpg` → `rakib-hasan.jpg`
  - Rename: `Ma-Huan Sheikh Meem - Chief Operating Officer.jpg` → `ma-huan-sheikh-meem.jpg`
  - Rename: `Adel Mohammad Zahid - Chief Product Officer.jpg` → `adel-mohammad-zahid.jpg`
  - Rename: `Tahmid Khan - Project Lead.jpg` → `tahmid-khan.jpg`
- `frontend/src/assets/Portfolio/Case Study N/` → `backend/storage/app/public/portfolio/case-study-N/`
  - Cover images go to `cover.jpg`
  - Gallery images go to `images/` subfolder
- `frontend/src/assets/Logo/` → `backend/storage/app/public/logo/`

### 7. Create Storage Symlink
```bash
php artisan storage:link
```

### 8. Start the Development Server
```bash
php artisan serve
```

The API will be available at `http://localhost:8000/api`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/homepage` | All homepage data in one request |
| GET | `/api/team-members` | All team members |
| GET | `/api/team-members/{slug}` | Single team member |
| GET | `/api/services` | All services with leads |
| GET | `/api/services/{slug}` | Single service detail |
| GET | `/api/case-studies` | All case studies |
| GET | `/api/case-studies/{slug}` | Single case study |
| GET | `/api/blog-posts` | All blog posts |
| GET | `/api/blog-posts/{slug}` | Single blog post |
| GET | `/api/testimonials` | All testimonials |
| GET | `/api/faqs` | All FAQs |
| GET | `/api/stats` | All stats |
| GET | `/api/clients` | All clients |
| GET | `/api/trust-badges` | Trust badges & indicators |
| GET | `/api/process-steps` | Process timeline steps |
| GET | `/api/founders-note` | Founder's note |
| GET | `/api/company-info` | Company info key-values |
| GET | `/api/activities` | Live activities |

