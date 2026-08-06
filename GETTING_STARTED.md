# Getting Started with Clover Junk Removal

## 🚀 Quick Start (5 minutes)

### 1. Clone the Repository
```bash
git clone https://github.com/mcmackinjacksonk-coder/Website.git
cd Website
```

### 2. Run Setup
```bash
./setup.sh
```

This will:
- Check for Node.js and pnpm
- Install all dependencies
- Prepare the project

### 3. Start Development Server
```bash
./run.sh
```

Open your browser to **http://localhost:3000** 🎉

---

## 📝 Available Commands

### Development
```bash
./run.sh                    # Start dev server with hot-reload
pnpm run dev               # Alternative: direct pnpm command
```

### Production
```bash
./start.sh                 # Build and start production server
pnpm run build             # Build only
pnpm run start             # Start production server
```

### Utilities
```bash
pnpm run preview           # Preview production build locally
pnpm check                 # Check for TypeScript errors
pnpm run format            # Format code with Prettier
```

---

## 🛠️ Manual Setup (Alternative)

If you prefer not to use the shell scripts:

```bash
# 1. Install dependencies
pnpm install

# 2. Start development server
pnpm run dev

# 3. Open browser to http://localhost:3000
```

---

## 📂 Project Structure

```
Website/
├── client/                 # React frontend
│   ├── src/components/    # Reusable UI components
│   ├── src/pages/         # Page components
│   ├── src/index.css      # Global styles
│   └── index.html         # HTML template
├── server/                 # Express backend
├── README.md              # Full documentation
├── setup.sh               # Setup script
├── run.sh                 # Development script
└── start.sh               # Production script
```

---

## ✏️ Making Changes

1. **Edit files** in `client/src/`
2. **Save** — Changes appear instantly (hot-reload)
3. **Check errors** — TypeScript errors shown in terminal

### Common Tasks

**Update phone number:**
- Search for `(803) 579-2165` in component files

**Change colors:**
- Edit `client/src/index.css` (design tokens)

**Add new section:**
- Create component in `client/src/components/`
- Import in `client/src/pages/Home.tsx`

---

## 🚢 Deployment

### Build for Production
```bash
pnpm run build
```

### Deploy Options

**Vercel (Recommended)**
- Push to GitHub → Connect to Vercel → Auto-deploy

**Netlify**
- Deploy the `dist/` folder

**Other Platforms**
- Upload `dist/` folder to any static host

---

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
pnpm run dev -- --port 3001
```

**Dependencies not installing?**
```bash
pnpm store prune
pnpm install
```

**TypeScript errors?**
```bash
pnpm check
```

---

## 📚 More Information

- See **README.md** for full documentation
- See **package.json** for all available scripts
- See **client/src/index.css** for design tokens

---

## ✅ You're Ready!

Everything is set up and ready to go. Start coding! 🍀
