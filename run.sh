#!/bin/bash

# Clover Junk Removal - Development Server Script
# This script starts the development server with hot-reload

set -e

echo "🍀 Clover Junk Removal - Development Server"
echo "==========================================="
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Dependencies not found. Installing..."
    pnpm install
    echo ""
fi

# Check for TypeScript errors
echo "🔍 Checking for TypeScript errors..."
pnpm check

echo ""
echo "🚀 Starting development server..."
echo "   Open your browser to: http://localhost:3000"
echo "   Press Ctrl+C to stop the server"
echo ""

# Start the dev server
pnpm run dev
