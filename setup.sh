#!/bin/bash

# Clover Junk Removal - Project Setup Script
# This script sets up the development environment

set -e

echo "🍀 Clover Junk Removal - Setup Script"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v18 or higher."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "⚠️  pnpm is not installed. Installing pnpm globally..."
    npm install -g pnpm
fi

echo "✅ pnpm version: $(pnpm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "🚀 Next steps:"
echo "   1. Start development server: pnpm run dev"
echo "   2. Open browser to: http://localhost:3000"
echo "   3. Edit files in client/src/ to see changes instantly"
echo ""
echo "📚 For more info, see README.md"
