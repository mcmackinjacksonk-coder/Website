# Clover Junk Removal Website

A modern, professional website for Clover Junk Removal built with React, Tailwind CSS, and Vite.

## Features

- **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- **Modern UI** — Fresh & Grounded aesthetic with deep clover green and warm amber accents
- **Service Showcase** — Display all junk removal services with beautiful cards
- **Booking System** — Contact form for customers to request pickups
- **Trust Signals** — Customer reviews section and trust badges
- **SEO Ready** — Optimized for search engines
- **Fast Performance** — Built with Vite for lightning-fast load times

## Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher) — [Download](https://nodejs.org/)
- **pnpm** (v10 or higher) — [Install guide](https://pnpm.io/installation)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mcmackinjacksonk-coder/Website.git
   cd Website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

### Development

Start the development server with hot-reload:

```bash
pnpm run dev
```

The site will be available at `http://localhost:3000`

**Features:**
- Hot Module Replacement (HMR) — Changes appear instantly
- TypeScript checking — Catch errors before runtime
- Tailwind CSS — Utility-first styling

### Build for Production

Create an optimized production build:

```bash
pnpm run build
```

This generates:
- `dist/` — Optimized static files ready for deployment
- `dist/index.js` — Production server (if using Express backend)

### Start Production Server

After building, start the production server:

```bash
pnpm run start
```

The site will run on `http://localhost:3000` (or your configured PORT)

### Other Commands

- **Preview production build locally:**
  ```bash
  pnpm run preview
  ```

- **Type checking:**
  ```bash
  pnpm check
  ```

- **Format code:**
  ```bash
  pnpm run format
  ```

## Project Structure

```
clover-junk-removal/
├── client/                 # Frontend React application
│   ├── public/            # Static assets (favicon, robots.txt)
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions
│   │   ├── App.tsx        # Main app component & routing
│   │   ├── main.tsx       # React entry point
│   │   └── index.css      # Global styles & design tokens
│   └── index.html         # HTML template
├── server/                 # Express backend (minimal)
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── tailwind.config.ts     # Tailwind CSS configuration
```

## Customization

### Update Business Information

Edit the following files to add your actual business details:

1. **Phone Number** — Search for `(803) 579-2165` in:
   - `client/src/components/Navbar.tsx`
   - `client/src/components/Contact.tsx`
   - `client/src/components/Footer.tsx`

2. **Email Address** — Update `hello@cloverjunk.com` in:
   - `client/src/components/Contact.tsx`
   - `client/src/components/Footer.tsx`

3. **Service Area** — Change "Austin & Surrounding Areas" in:
   - `client/src/components/Contact.tsx`
   - `client/src/components/Footer.tsx`

4. **Business Hours** — Update in `client/src/components/Contact.tsx`

### Styling

- **Colors** — Edit design tokens in `client/src/index.css`
- **Typography** — Modify font imports in `client/index.html`
- **Spacing & Layout** — Adjust Tailwind utilities in component files

### Adding New Sections

1. Create a new component in `client/src/components/`
2. Import and add it to `client/src/pages/Home.tsx`
3. Style using Tailwind CSS classes

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Vercel auto-detects the build and deploys

### Deploy to Netlify

1. Build the project: `pnpm run build`
2. Deploy the `dist/` folder to [Netlify](https://netlify.com)

### Deploy to Other Platforms

The `dist/` folder contains all static files ready for deployment to:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any static hosting service

## Performance

- **Lighthouse Score** — Optimized for Core Web Vitals
- **Bundle Size** — Minimal with tree-shaking
- **Caching** — Static assets cached for fast repeat visits

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port already in use

If port 3000 is already in use, specify a different port:

```bash
pnpm run dev -- --port 3001
```

### Dependencies not installing

Clear cache and reinstall:

```bash
pnpm store prune
pnpm install
```

### Build errors

Check for TypeScript errors:

```bash
pnpm check
```

## Contributing

To contribute improvements:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

MIT License — See LICENSE file for details

## Support

For issues or questions, contact the development team or open an issue on GitHub.

---

**Built with ❤️ using React, Tailwind CSS, and Vite**
