#!/usr/bin/env python3
"""
FairCorp Hub V2 Development Script
This script helps to run the development server
"""

import os
import subprocess
import sys
import platform

def check_npm():
    """Check if npm is installed"""
    try:
        subprocess.run(["npm", "--version"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, check=True)
        return True
    except (subprocess.SubprocessError, FileNotFoundError):
        print("Error: npm is not installed or not in your PATH.")
        return False

def check_package_json():
    """Check if package.json exists in current directory"""
    if not os.path.isfile("package.json"):
        print("Error: package.json not found. Make sure you're in the frontend directory.")
        return False
    return True

def install_dependencies():
    """Install npm dependencies if needed"""
    if not os.path.isdir("node_modules"):
        print("Installing dependencies...")
        result = subprocess.run(["npm", "install"], check=False)
        if result.returncode != 0:
            print("Error installing dependencies. Please check npm output.")
            return False
    return True

def start_dev_server():
    """Start the development server"""
    print("Starting development server...")
    subprocess.run(["npm", "run", "dev"], check=False)

def main():
    """Main entry point"""
    print("=== FairCorp Hub V2 Development Server ===")
    
    if not check_npm():
        sys.exit(1)
        
    if not check_package_json():
        sys.exit(1)
        
    if not install_dependencies():
        sys.exit(1)
        
    start_dev_server()

if __name__ == "__main__":
    main() 