# FairCorp Hub V2

A modern company portal and service router for FairCorp.

## Tech Stack

- React (with TypeScript)
- TailwindCSS
- Vite (Build Tool)
- React Router

## Development Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

The development server will start at http://localhost:3000.

## Building for Production

```bash
npm run build
```

This will create a `dist` directory with production-ready files.

## Deployment on Ubuntu Server

### Prerequisites

- Node.js (v16 or later)
- Nginx
- Git

### Step 1: Set up the server

1. SSH into your Ubuntu server:

```bash
ssh username@your-server-ip
```

2. Update and install required packages:

```bash
sudo apt update
sudo apt install nginx nodejs npm git -y
```

### Step 2: Clone the repository

```bash
git clone https://github.com/your-username/faircorp-hub-v2.git
cd faircorp-hub-v2/frontend
```

### Step 3: Install dependencies and build

```bash
npm install
npm run build
```

### Step 4: Configure Nginx

1. Create a new Nginx configuration file:

```bash
sudo nano /etc/nginx/sites-available/faircorp-hub
```

2. Add the following configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    root /path/to/faircorp-hub-v2/frontend/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Caching static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
}
```

3. Enable the configuration and restart Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/faircorp-hub /etc/nginx/sites-enabled/
sudo nginx -t # Test the configuration
sudo systemctl restart nginx
```

### Step 5: Set up SSL with Let's Encrypt (Optional but recommended)

1. Install Certbot:

```bash
sudo apt install certbot python3-certbot-nginx -y
```

2. Generate SSL certificate:

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

3. Follow the prompts to complete the SSL setup.

### Maintenance and Updates

1. To update the site with new changes:

```bash
cd /path/to/faircorp-hub-v2
git pull
cd frontend
npm install
npm run build
```

2. No need to restart Nginx after updates.

### Troubleshooting

1. If the site doesn't load:
   - Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
   - Verify permissions: `sudo chown -R www-data:www-data /path/to/faircorp-hub-v2/frontend/dist`
   - Ensure Nginx is running: `sudo systemctl status nginx`

2. If routing issues occur:
   - Verify the Nginx configuration has the try_files directive
   - Ensure that the base URL in vite.config.js is set correctly 