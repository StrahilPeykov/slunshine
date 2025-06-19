# SlunShine

A beautiful, modern website for Alexandrina "Ally" Kushinchanova - professional harpist, music teacher, and emerging artist.

## About

SlunShine is the artistic persona of Alexandrina Kushinchanova, a Bulgarian harpist who creates ethereal music that bridges classical tradition with contemporary innovation. This website showcases her musical journey, upcoming releases, performance videos, and teaching services.

## Features

- **Dual Theme System**: Beautiful day/night mode toggle with smooth transitions
- **Interactive Animations**: Sophisticated animations powered by Framer Motion
- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Music Showcase**: Video gallery and upcoming releases section
- **Online Presence**: Integrated social media links and contact forms
- **Teaching Services**: Information about harp, piano, and music theory lessons
- **Performance Optimized**: Built with Next.js 15 and modern web standards

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4 with custom design system
- **Animations**: Framer Motion
- **UI Components**: Radix UI primitives
- **Fonts**: Google Fonts (Playfair Display, Inter, Cormorant Upright)
- **Icons**: Lucide React
- **Deployment**: Optimized for Vercel

## Getting Started

### Prerequisites

- Node.js 18.18.0 or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/slunshine-website.git
cd slunshine-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Setup

The website works out of the box with no additional environment variables required for basic functionality. For the contact form to work in production, you may want to integrate with email services.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── globals.css        # Global styles and theme system
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── providers.tsx     # Context providers
├── components/
│   ├── layout/           # Header, footer, navigation
│   ├── providers/        # Theme provider
│   └── sections/         # Page sections (hero, about, etc.)
└── lib/
    └── utils.ts          # Utility functions
```

## Design System

The website features a sophisticated dual-theme design system:

### Day Theme (Nature-Dream)
- **Background**: Warm cream (#FFFCFA)
- **Primary**: Coral (#FF8875)
- **Accent**: Lilac Halo (#C9A8FF)
- **Supporting**: Aqua Mist (#8EE5E0)

### Night Theme (Neon-Cosmic)
- **Background**: Midnight Navy (#0E1A2A)
- **Primary**: Lava Glow (#FF4757)
- **Accent**: Lilac Halo (#C9A8FF)
- **Supporting**: Various cosmic gradients

## Key Sections

1. **Hero**: Dynamic introduction with theme-aware animations
2. **Music**: Showcase of performances and upcoming releases
3. **About**: Personal story and current projects
4. **Lessons**: Teaching services and offerings
5. **Contact**: Multiple ways to connect

## Social Media Integration

The website connects to:
- Instagram: [@slun_shine](https://instagram.com/slun_shine)
- TikTok: [@slun_shine](https://www.tiktok.com/@slun_shine)
- Spotify: [Artist Profile](https://open.spotify.com/user/akartu113?si=e0ed233e08044e48)

## Deployment

The project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

For other platforms, build the project:

```bash
npm run build
npm start
```

## Contact Integration

The contact form includes a basic API route at `/api/contact`. For production use, integrate with:
- Email services (SendGrid, Mailgun)
- Google Sheets
- CRM systems

## Performance Features

- **Next.js App Router**: Latest routing and rendering patterns
- **Image Optimization**: Sharp for optimal image loading
- **Font Optimization**: Self-hosted Google Fonts
- **Bundle Optimization**: Automatic code splitting
- **SEO Ready**: Meta tags and structured data

## Customization

### Adding New Sections
Create new components in `src/components/sections/` and import them in `src/app/page.tsx`.

### Modifying Themes
Update colors in `src/app/globals.css` and `tailwind.config.ts`.

### Adding Animations
Use Framer Motion components and the existing animation system.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary. All rights reserved.

## Credits

- **Artist**: Alexandrina "Ally" Kushinchanova
- **Developer & Designer**: Strahil Peykov
- **Photography**: Various performance venues
- **Fonts**: Google Fonts (Playfair Display, Inter, Cormorant Upright)
