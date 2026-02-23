# Muhammad Rizqy Al Gozali - Portfolio Website Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Configuration System](#configuration-system)
5. [Component Architecture](#component-architecture)
6. [Styling System](#styling-system)
7. [Animation System](#animation-system)
8. [Section Details](#section-details)
9. [Build & Deployment](#build--deployment)
10. [Customization Guide](#customization-guide)

---

## Project Overview

This is a professional portfolio website for Muhammad Rizqy Al Gozali, a Data Engineer and Analyst based in Indonesia. The website showcases his expertise, projects, research publications, and contact information.

### Key Features
- Responsive design for all screen sizes
- Scroll-triggered animations
- Mouse-tracking hero effect
- SEO-optimized structure
- Clean, minimal aesthetic

---

## Tech Stack

### Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19 | UI library |
| TypeScript | 5.x | Type safety |
| Vite | 7 | Build tool & dev server |
| Tailwind CSS | 3.4.19 | Utility-first styling |
| shadcn/ui | Latest | UI component primitives |

### Additional Dependencies
- **Lucide React** - Icon library
- **Geist Font** - Typography (via CDN)
- **Intersection Observer API** - Scroll animations (native browser API)

### Why This Stack?
- **React + TypeScript**: Type-safe component development
- **Vite**: Fast builds, hot module replacement, optimized production bundles
- **Tailwind CSS**: Rapid styling with utility classes, consistent design system
- **shadcn/ui**: Pre-built accessible components that can be customized
- **No animation libraries**: Uses native CSS transitions + Intersection Observer for performance

---

## Project Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── images/              # Static images (hero, portfolio, logos)
│       ├── hero-bg.jpg      # Personal photo for hero
│       ├── about-1.jpg      # About section images
│       ├── portfolio-*.jpg  # Portfolio project thumbnails
│       ├── ieee-logo.png    # IEEE logo for research
│       └── ...
├── src/
│   ├── components/          # Reusable UI components
│   │   └── AnimatedButton.tsx
│   ├── sections/            # Page sections (main content)
│   │   ├── Hero.tsx         # Hero with mouse-tracking effect
│   │   ├── About.tsx        # About me section
│   │   ├── Services.tsx     # Expertise/Skills section
│   │   ├── Portfolio.tsx    # Projects showcase
│   │   ├── Testimonials.tsx # Research/Publications
│   │   ├── CTA.tsx          # Call-to-action section
│   │   ├── Footer.tsx       # Footer with links
│   │   └── Navigation.tsx   # Fixed navbar
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollAnimation.ts    # Scroll-triggered animations
│   │   └── useMouseParallax.ts      # Mouse parallax for services
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn helper)
│   ├── config.ts            # ALL CONTENT CONFIGURATION
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles & CSS variables
├── index.html               # HTML template with SEO meta tags
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

---

## Configuration System

All website content is centralized in `src/config.ts`. This is the single source of truth for:
- Personal information
- Section headings and descriptions
- Skills and expertise
- Portfolio projects
- Contact details
- Social links

### Configuration Pattern
```typescript
// Each section has an interface + config object
export interface HeroConfig {
  name: string;
  subtitle: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "Muhammad Rizqy Al Gozali",
  subtitle: "Rizqy Al Gozali",
  roles: ["Data Engineer", "Data Analyst", "ETL Developer", "BI Specialist"],
  backgroundImage: "/images/hero-bg.jpg",
};
```

### Why Centralized Config?
1. **Easy updates** - Change content without touching component code
2. **Type safety** - TypeScript ensures all required fields are present
3. **Consistency** - Content structure is enforced
4. **Localization ready** - Easy to add multi-language support

---

## Component Architecture

### Section Components Pattern
Each section follows this structure:

```typescript
export function SectionName() {
  // Early return if section has no content
  if (!sectionConfig.requiredField) return null;

  // Scroll animation hook
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="section-id" className="...">
      <div ref={ref}>
        {/* Content with animation classes based on isVisible */}
        <div className={cn(
          'transition-all duration-800',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        )}>
          {/* Section content */}
        </div>
      </div>
    </section>
  );
}
```

### Key Patterns
1. **Null check first** - Sections return null if config is empty
2. **useScrollAnimation** - Handles scroll-triggered reveal animations
3. **cn() utility** - Combines Tailwind classes conditionally
4. **transition classes** - Elements fade in and slide up when visible

---

## Styling System

### Tailwind Configuration
The project uses a custom design system via CSS variables:

```css
:root {
  /* Exvia Design System Colors */
  --exvia-black: #131313;
  --exvia-white: #FFFFFF;
  --exvia-subtle: #EAEAEA;
  --exvia-border: #EFEFF2;
  --exvia-blue: #0082F3;
  
  /* Animation Easings */
  --ease-out-quart: cubic-bezier(0.165, 0.840, 0.440, 1);
  --ease-out-cubic: cubic-bezier(0.215, 0.610, 0.355, 1);
}
```

### Responsive Breakpoints
| Breakpoint | Width | Usage |
|------------|-------|-------|
| `sm` | 640px | Mobile landscape |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Large desktop |

### Typography Scale
```
Hero:     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
H2:       text-2xl sm:text-3xl lg:text-4xl
Body:     text-sm sm:text-base lg:text-lg
Small:    text-xs sm:text-sm
Tiny:     text-[10px] sm:text-xs
```

---

## Animation System

### useScrollAnimation Hook
```typescript
// Triggers animation when element enters viewport
const { ref, isVisible } = useScrollAnimation({ 
  threshold: 0.2  // Trigger when 20% visible
});
```

**How it works:**
1. Uses native `IntersectionObserver` API
2. Sets `isVisible = true` when element enters viewport
3. CSS transitions handle the animation

### Animation Classes
```css
/* Initial state (hidden) */
opacity: 0;
transform: translateY(24px);

/* Visible state */
opacity: 1;
transform: translateY(0);
transition: all 0.8s cubic-bezier(0.165, 0.840, 0.440, 1);
```

### Hero Mouse Tracking
The hero section has a unique effect where a sharp image window follows the cursor over a blurred background.

**Implementation:**
```typescript
// Mouse position stored in CSS variables
section.style.setProperty('--mouse-x', `${x - 225}px`);
section.style.setProperty('--mouse-y', `${y - 225}px`);

// Sharp image container positioned via CSS variables
transform: translate3d(var(--mouse-x), var(--mouse-y), 0);
```

**Box size:** 450px × 450px

---

## Section Details

### 1. Hero Section (`Hero.tsx`)
**Purpose:** First impression, name display, role labels

**Features:**
- Full viewport height (`min-h-screen`)
- Mouse-tracking sharp image effect
- Blurred background image with WebP support
- Role labels positioned at top corners
- Responsive font sizing

**Image Loading Strategy:**
The hero uses responsive images with format fallback:
```tsx
<picture>
  <source srcSet="/images/hero-bg-800.webp" media="(max-width: 800px)" type="image/webp" />
  <source srcSet="/images/hero-bg-1200.webp" media="(max-width: 1200px)" type="image/webp" />
  <source srcSet="/images/hero-bg-1920.webp" type="image/webp" />
  <img src="/images/hero-bg.jpg" alt="Hero" decoding="async" />
</picture>
```

**Key CSS:**
```css
/* Sharp image window */
width: 450px;
height: 450px;
transform: translate3d(var(--mouse-x), var(--mouse-y), 0);

/* Background blur */
filter: blur(15px) brightness(0.7);
```

---

### 2. About Section (`About.tsx`)
**Purpose:** Personal introduction, stats display

**Layout:**
- Heading at top
- Paragraph description
- Stats grid (4 columns: Experience, Projects, Publication, GPA)

**Responsive:**
- Mobile: 2-column stats grid
- Desktop: 4-column stats grid

---

### 3. Services/Expertise Section (`Services.tsx`)
**Purpose:** Showcase skills and expertise areas

**Layout:**
- 2-column grid on desktop
- 1-column on mobile
- Card-based design with icons

**Cards include:**
- Icon (Lucide)
- Title
- Description

---

### 4. Portfolio Section (`Portfolio.tsx`)
**Purpose:** Display projects and work

**Layout:**
- 2×2 image grid
- Each project: image + title + category + year
- Hover effects: scale image, show arrow

**Image aspect ratio:** 4:3

---

### 5. Research Section (`Testimonials.tsx`)
**Purpose:** Display publications

**Layout:**
- Full-width card (when single item)
- IEEE logo
- Paper title
- Description
- Author info + external link

---

### 6. CTA Section (`CTA.tsx`)
**Purpose:** Contact call-to-action

**Layout:**
- Background image with dark overlay
- Role tags (pills)
- Main heading
- Description
- Email button

---

### 7. Footer (`Footer.tsx`)
**Purpose:** Navigation links, social links, copyright

**Layout:**
- Logo + description
- Navigation columns
- Social icons
- Copyright bar

---

## Build & Deployment

### Development
```bash
cd /mnt/okcomputer/output/app
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

**Output:** `dist/` folder with:
- `index.html` - Entry point
- `assets/` - Bundled JS/CSS with hash filenames
- `images/` - Copied static images

### Deployment
The `dist/` folder is deployed to a static hosting service.

---

## Customization Guide

### Changing Content
1. Open `src/config.ts`
2. Find the section you want to edit
3. Update the values
4. Rebuild and redeploy

### Adding a New Project
```typescript
// In portfolioConfig.projects array
{
  title: "New Project Name",
  category: "Category / Technology",
  year: "2025",
  image: "/images/portfolio-6.jpg",
}
```

### Changing Colors
1. Edit `src/index.css`
2. Update CSS variables in `:root`
3. Rebuild

### Adding a New Section
1. Create component in `src/sections/NewSection.tsx`
2. Add config in `src/config.ts`
3. Import and add to `App.tsx`
4. Add navigation link in `navigationConfig`

---

## SEO Configuration

Meta tags are in `index.html`:
- Title
- Description
- Open Graph tags (Facebook/LinkedIn)
- Twitter Card tags
- Structured data (JSON-LD)

---

## Performance Notes

### Image Optimization
The hero background image uses a multi-format, responsive approach:
- **WebP format** with JPEG fallback for older browsers
- **Responsive sizes**: 800px (mobile), 1200px (tablet), 1920px (desktop)
- **Result**: 83% smaller file sizes (156KB → 26KB on mobile)

### Key Optimizations
1. **Preload hints**: Hero image loads before React renders (better LCP)
2. **Preconnect**: DNS lookup happens early for fonts and CDNs
3. **Async decoding**: Images decode off the main thread
4. **Font loading**: `font-display: swap` prevents invisible text
5. **GPU animations**: Only use `transform` and `opacity`

### Performance Targets
| Metric | Target |
|--------|--------|
| LCP (Largest Contentful Paint) | < 2.5s |
| CLS (Cumulative Layout Shift) | < 0.1 |
| Hero image (mobile) | < 20KB |
| JS bundle | < 300KB |

---

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## File Size Budget

| Asset Type | Target Size |
|------------|-------------|
| JS Bundle | < 300KB |
| CSS Bundle | < 100KB |
| Hero Image | < 200KB |
| Portfolio Images | < 100KB each |

---

## Troubleshooting

### Images not showing
- Check `public/images/` folder exists
- Verify image paths in config
- Ensure images are copied to `dist/` during build

### Animations not working
- Check `useScrollAnimation` hook is used
- Verify `ref` is attached to element
- Check CSS transition classes

### Styles not applying
- Verify Tailwind classes are valid
- Check `cn()` utility is imported
- Ensure no CSS conflicts

---

## License

This project is private and for personal use.

---

## Contact

For questions or updates, contact:
- Email: contact@algozali.page
- Location: Tangerang, Indonesia
