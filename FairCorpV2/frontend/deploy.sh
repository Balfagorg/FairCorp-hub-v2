#!/bin/bash

# FairCorp Hub V2 Deployment Script
# This script automates the deployment process on an Ubuntu server

# Exit immediately if a command exits with a non-zero status
set -e

echo "=== FairCorp Hub V2 Deployment ==="
echo "Starting deployment process..."

# Check if the current directory contains package.json
if [ ! -f package.json ]; then
  echo "Error: package.json not found. Make sure you're in the frontend directory."
  exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
  echo "Error: Build failed. The 'dist' directory was not created."
  exit 1
fi

echo "Build completed successfully!"

# Configure Nginx if the user wants to
read -p "Do you want to configure Nginx? (y/n) " configure_nginx

if [[ $configure_nginx =~ ^[Yy]$ ]]; then
  # Check if nginx is installed
  if ! command -v nginx &> /dev/null; then
    echo "Nginx not found. Installing..."
    sudo apt update
    sudo apt install nginx -y
  fi

  # Create Nginx configuration
  read -p "Enter your domain name (e.g., example.com): " domain_name
  
  if [ -z "$domain_name" ]; then
    echo "No domain provided. Using default configuration."
    domain_name="_"
  fi

  # Get the absolute path to the dist directory
  dist_path=$(realpath dist)
  
  echo "Creating Nginx configuration..."
  sudo tee /etc/nginx/sites-available/faircorp-hub > /dev/null << EOL
server {
    listen 80;
    server_name ${domain_name};

    root ${dist_path};
    index index.html;

    location / {
        try_files \$uri \$uri/ /index.html;
    }

    # Caching static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)\$ {
        expires 1y;
        add_header Cache-Control "public, max-age=31536000";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff";
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
}
EOL

  # Enable the site
  sudo ln -sf /etc/nginx/sites-available/faircorp-hub /etc/nginx/sites-enabled/
  
  # Test Nginx configuration
  echo "Testing Nginx configuration..."
  sudo nginx -t
  
  # Reload Nginx
  echo "Reloading Nginx..."
  sudo systemctl reload nginx
  
  # Set proper permissions for the web server
  echo "Setting proper permissions..."
  sudo chown -R www-data:www-data ${dist_path}
  
  echo "Nginx configured successfully!"
  
  # Setup SSL with Let's Encrypt
  read -p "Do you want to set up SSL with Let's Encrypt? (y/n) " setup_ssl
  
  if [[ $setup_ssl =~ ^[Yy]$ ]]; then
    if ! command -v certbot &> /dev/null; then
      echo "Certbot not found. Installing..."
      sudo apt install certbot python3-certbot-nginx -y
    fi
    
    echo "Setting up SSL with Let's Encrypt..."
    sudo certbot --nginx -d ${domain_name}
    
    echo "SSL setup completed!"
  fi
fi

echo "=== Deployment completed successfully! ===" 