# FairCorp Hub (Modern Company Portal)

> **Status:** In Development - The FairCorp Hub app is being scaffolded from scratch.

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Edit the About page at `src/pages/About.tsx`.

This frontend now contains the new **FairCorp Hub** site, a modern informational and routing portal for FairCorp. The AV3 app is **not present** in this version; this is a fresh build focused on the company hub and service routing only.

## 🚀 Features

### 🎨 Modern UI/UX
- **Responsive Design**: Mobile-first approach with beautiful responsive layouts
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

### 🔐 Authentication & Security
- **JWT Authentication**: Secure token-based authentication
- **Protected Routes**: Automatic redirection for unauthenticated users
- **Session Management**: Persistent login state with automatic token refresh
- **Password Security**: Secure password handling with visibility toggle

## 🛠️ Technology Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- react-router-dom

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Backend server running (see backend README)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd QCO_AV3/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env file
   cp .env.example .env
   
   # Edit .env with your configuration
   VITE_API_BASE_URL=http://127.0.0.1:8000
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Project Structure

- `src/` - Main source code for FairCorp Hub
  - `pages/` - Top-level pages (Home, About, Services)
  - `components/` - Reusable UI components (Navbar, Footer, etc.)
  - `App.tsx` - Main app and router
  - `main.tsx` - Entry point

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#0ea5e9) - Main brand color
- **Secondary**: Gray (#64748b) - Text and borders
- **Accent**: Purple (#d946ef) - Highlights and CTAs
- **Success**: Green (#22c55e) - Success states
- **Warning**: Yellow (#f59e0b) - Warning states
- **Error**: Red (#ef4444) - Error states

### Typography
- **Primary Font**: Inter - Clean, modern sans-serif
- **Code Font**: JetBrains Mono - Excellent for code display

### Components
- **Buttons**: Multiple variants with hover and focus states
- **Cards**: Consistent card layouts with shadows
- **Forms**: Accessible form components with validation
- **Modals**: Overlay dialogs with backdrop blur
- **Navigation**: Collapsible sidebar with active states

## 🔧 Development

### Available Scripts
```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript type checking
```

### Code Style
- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration with custom rules
- **Prettier**: Consistent code formatting
- **Import Sorting**: Automatic import organization

### Testing
```bash
# Run tests
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🚀 Deployment

### Production Build
```bash
# Create optimized build
npm run build

# The build output will be in the `dist` directory
```

### Environment Variables
```bash
# Required
VITE_API_BASE_URL=http://your-api-server.com

# Optional
VITE_APP_TITLE=QProject - Genie AV3
VITE_APP_VERSION=1.0.0
```

### Deployment Platforms
- **Vercel**: Zero-config deployment
- **Netlify**: Drag-and-drop deployment
- **GitHub Pages**: Static hosting
- **Docker**: Containerized deployment

## 🔒 Security

### Authentication
- JWT tokens stored securely in localStorage
- Automatic token refresh
- Protected route handling
- Session timeout management

### Data Protection
- Input sanitization
- XSS prevention
- CSRF protection
- Secure API communication

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Features
- **Mobile Navigation**: Collapsible sidebar
- **Touch-friendly**: Large touch targets
- **Optimized Images**: Responsive image loading
- **Performance**: Optimized for mobile networks

## 🎯 Performance

### Optimization
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Component and image lazy loading
- **Caching**: React Query for intelligent caching
- **Bundle Analysis**: Webpack bundle analyzer

### Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Write meaningful commit messages
- Add JSDoc comments for complex functions
- Ensure accessibility compliance

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

### Getting Help
- **Documentation**: Check the backend README for API documentation
- **Issues**: Report bugs and feature requests on GitHub
- **Discussions**: Join community discussions

### Common Issues
- **Build Errors**: Ensure Node.js version is 18+
- **API Connection**: Verify backend server is running
- **TypeScript Errors**: Run `npm run type-check` for detailed errors

---

For questions or contributions, contact the FairCorp Team.

Built with ❤️ for FairCorp. 