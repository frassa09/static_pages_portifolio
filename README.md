# Landing Pages Portfolio

A collection of landing pages built with React and Tailwind CSS.

## Projects

1. **Agency Software** - Dark-themed agency landing page with tech gradients
2. **SaaS CRM** - Clean SaaS product page with pricing section
3. **Restaurant** - Warm-toned restaurant landing page
4. **Clothing Store** - Minimalist fashion e-commerce landing page
5. **Education Institution** - Professional education landing page

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- GitHub Pages

## Development

```bash
# Install dependencies
npm install

# Run all apps in dev mode
npm run dev

# Build all apps
npm run build
```

## Deployment

Push to `main` branch to trigger automatic deployment via GitHub Actions.

## Structure

```
├── portfolio-hub/          # Main portfolio page
├── landing-pages/
│   ├── agency-software/
│   ├── saas-crm/
│   ├── restaurant/
│   ├── clothing-store/
│   └── education-institution/
├── shared/                 # Shared components
├── DESIGN.md              # Design system
└── AGENTS.md              # Project instructions
```

## Shared Components

- `Navbar` - Responsive navigation with mobile menu
- `Footer` - Links and copyright
- `Hero` - Hero section with CTA
- `CTA` - Call-to-action section
- `Card` - Feature/pricing cards

## Adding New Landing Pages

1. Create new folder in `landing-pages/`
2. Copy structure from existing landing page
3. Update `build.js` to include new app
4. Update hub central `App.jsx` to link to new page
