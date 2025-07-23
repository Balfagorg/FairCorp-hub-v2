# FairCorp Hub V2 Development Script
Write-Host "=== FairCorp Hub V2 Development Server ==="

# Check if npm is installed
try {
    npm --version > $null
}
catch {
    Write-Host "Error: npm is not installed or not in your PATH."
    exit 1
}

# Check if the current directory contains package.json
if (-not (Test-Path "package.json")) {
    Write-Host "Error: package.json not found. Make sure you're in the frontend directory."
    exit 1
}

# Install dependencies if node_modules doesn't exist
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..."
    npm install
}

# Start development server
Write-Host "Starting development server..."
npm run dev 