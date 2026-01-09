#!/bin/bash

# Audrey Photobook Editor - Development Environment Setup
# This script initializes and runs the development environment

set -e

echo "========================================"
echo "  Audrey Photobook Editor Setup"
echo "========================================"
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed."
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "ERROR: Node.js version 18 or higher is required."
    echo "Current version: $(node -v)"
    exit 1
fi

echo "Node.js version: $(node -v)"
echo "npm version: $(npm -v)"
echo ""

# Navigate to project directory (where the Next.js app is)
cd "$(dirname "$0")"

# Check if node_modules exists, if not install dependencies
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo ""
fi

# Check if shadcn/ui is configured
if [ ! -d "components/ui" ]; then
    echo "Setting up shadcn/ui components..."
    # Components will be added during development
fi

echo "========================================"
echo "  Starting Development Server"
echo "========================================"
echo ""
echo "The application will be available at:"
echo "  http://localhost:3000"
echo ""
echo "Routes:"
echo "  /                    - Landing page"
echo "  /photobooks          - Album selection"
echo "  /photobooks/album-1  - Album 1 detail"
echo "  /photobooks/editor   - Photobook editor"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev
