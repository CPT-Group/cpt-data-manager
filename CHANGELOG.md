# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.4] - 2025-11-26 16:49:41

### Added
- Data manager route (`/data-manager`) with toolbar header
- DataManagerToolbar component with logo button, case selector dropdown, and theme toggle
- Dummy case list data structure for case selection
- Complete Next.js metadata configuration (OpenGraph, Twitter, icons, robots)
- Icon images copied from support portal (apple-icon, icon, opengraph-image, twitter-image)
- Updated root layout with comprehensive metadata matching example codebases

### Why
- Create main application page structure with professional header/toolbar
- Enable case selection functionality for data loading
- Provide proper SEO and social media sharing metadata
- Ensure Next.js automatically detects and serves icons and images correctly
- Match metadata patterns from support portal and component showcase for consistency

## [0.1.3] - 2025-11-26 16:19:28

### Added
- Simple landing page with HomeHero component
- Dummy "Get Started" button using CPTButton component
- Home page component structure matching support portal pattern

### Why
- Create initial landing page similar to support portal for consistency
- Establish page component structure following established patterns
- Use only CPT PrimeReact components and PrimeFlex utilities for layout (no custom colors/styling)
- Prepare foundation for future UI development following component guidelines

## [0.1.2] - 2025-11-26 16:14:47

### Changed
- Removed "Hello World" placeholder content from home page
- Created UI design documentation file (ui-design-v1.0.0.md)

### Why
- Prepare clean slate for UI design and development discussions
- Establish documentation structure for tracking design decisions and implementation details
- Ready to begin collaborative design process

## [0.1.1] - 2025-11-26 15:24:09

### Added
- PrimeReact provider setup with core styles (primereact, primeicons, primeflex)
- Theme provider with light/dark mode support and localStorage persistence
- Theme toggle component for switching between themes
- Theme files copied from cpt-theme (soho-light and soho-dark) to public/themes
- Providers wrapper component combining ThemeProvider and PrimeReactProvider
- Updated root layout to use Providers and ThemeToggle

### Why
- Set up PrimeReact foundation matching example codebases (cpt-component-demo and cpt-support-portal)
- Enable theme switching functionality with persistent user preference
- Prepare for PrimeReact component usage with proper styling and theming support
- Ensure consistent theming across all CPT applications using shared theme from cpt-theme

## [0.1.0] - 2025-11-26 13:55:58

### Added
- Initial Next.js TypeScript React application setup
- Project structure with components, providers, constants, types, and util folders
- Index export files for organized component exports
- Dependencies: @cpt-group/cpt-prime-react, chart.js, lodash-es, primeflex, primeicons, primereact, quill, react-hook-form
- TypeScript configuration with path aliases (@/*)
- ESLint and PostCSS configuration
- Tailwind CSS setup
- Bare-bones "Hello World" page
- Minimal layout and global CSS setup

### Why
- Set up a clean foundation matching the structure and dependencies from example codebases (cpt-component-demo and cpt-support-portal)
- Establish folder structure and export patterns for maintainable code organization
- Prepare for development with all required dependencies and configurations

