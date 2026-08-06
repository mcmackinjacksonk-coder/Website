#!/bin/bash

# Clover Junk Removal - Production Start Script
# This script builds and starts the production server

set -e

echo "🍀 Clover Junk Removal - Production Server"
echo "=========================================="
echo ""

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
    echo ""
fi

# Build the project
echo "🔨 Building project..."
pnpm run build

echo ""
echo "✅ Build complete!"
echo ""
echo "🚀 Starting production server..."
echo "   Server running on: http://localhost:3000"
echo "   Press Ctrl+C to stop the server"
echo ""

# Start the production server
NODE_ENV=production pnpm run start
