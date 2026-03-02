# El-Sombrart - Illustrator Portfolio

A sophisticated portfolio website showcasing the work of El-Sombrart, featuring a cinematic 3D scroll experience with WebGL animations and modern web technologies.

![El-Sombrart Portfolio](/og.jpg)

## 🎨 About

El-Sombrart is an illustrator specializing in original artwork, character designs, and creative illustrations. This portfolio demonstrates advanced web development capabilities through immersive 3D experiences while maintaining a focus on artistic presentation.

## ✨ Features

- **3D Cylinder Carousel**: WebGL-powered rotating cylinder with smooth scroll animations
- **Reactive Particles**: Dynamic particle system that responds to user interaction
- **Smooth Scrolling**: GSAP-powered cinematic scroll experience with ScrollSmoother
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Navigation**: Clean menu overlay with smooth transitions
- **Typography Animations**: Norris animation library for elegant text effects
- **About Page**: Professional artist information and process description
- **Process Page**: Detailed creative workflow presentation
- **Portfolio Page**: Clean slate for future gallery implementations

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **3D Graphics**: OGL (WebGL library) + GSAP
- **Animations**: GSAP (ScrollTrigger, ScrollSmoother, CustomEase)
- **Styling**: Tailwind CSS + custom CSS
- **Build Tool**: Vite
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd sombrero

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 🚀 Usage

The development server will start on `http://localhost:5173` by default. The site features:

- **Home Page**: Interactive 3D cylinder carousel with particle effects
- **About Page**: Artist information and creative process
- **Process Page**: Detailed workflow presentation
- **Portfolio Page**: Clean gallery space for artwork showcase
- **Navigation**: Click the menu button to access all pages

## 🎯 Project Structure

```
src/
├── components/
│   ├── pages/
│   │   ├── variant-1/
│   │   │   ├── cylinder-carousel.tsx    # Main 3D carousel component
│   │   │   ├── data.ts                # Carousel data and configuration
│   │   │   ├── types.ts               # TypeScript type definitions
│   │   │   ├── utils.ts               # Utility functions
│   │   │   └── shaders.ts             # WebGL shader programs
│   │   ├── about.tsx                # About page
│   │   ├── process.tsx              # Process page
│   │   └── portfolio.tsx             # Portfolio page
│   ├── navbar.tsx                   # Top navigation bar
│   ├── menu-overlay.tsx              # Mobile menu overlay
│   └── loader.tsx                   # Loading component
├── lib/
│   ├── norris-animation.ts           # Text animation library
│   └── theme.ts                    # Theme configuration
└── assets/
    ├── img/                         # Portfolio images
    └── sombralogo.png               # Site logo
```

## 🎨 Design System

- **Typography**: Freight Display Pro (serif) for headings, system fonts for body
- **Color Palette**: Black backgrounds with white text, accent colors for interactions
- **Spacing**: Consistent spacing scale using Tailwind classes
- **Animations**: Smooth cubic-bezier transitions and micro-interactions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration

The 3D carousel can be customized through:

- **Cylinder Settings**: Radius, height, rotation speed
- **Particle Effects**: Count, size, movement patterns
- **Scroll Behavior**: Animation duration, easing functions
- **Image Assets**: Replace images in `/public/img/` directory

## 🌐 Browser Support

- Chrome/Edge (Recommended)
- Firefox
- Safari
- Mobile browsers with WebGL support

## 📸 Assets

- **Logo**: Custom El-Sombrart branding
- **Images**: Portfolio artwork in `/public/img/`
- **Icons**: Social media links and navigation elements

## 🔗 Social Links

- **Behance**: [https://behance.net/el-sombrart](https://behance.net/el-sombrart)

## 📝 Development

```bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 👤 Credits

- **3D Engine**: OGL WebGL library
- **Animations**: GSAP animation platform
- **Design**: El-Sombrart original artwork and branding
- **Development**: Built with modern web technologies and best practices

---

*Created with ❤️ by El-Sombrart*
