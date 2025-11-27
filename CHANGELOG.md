# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.9] - 2025-11-26 17:37:09

### Added
- Netlify deployment configuration (netlify.toml)
- @netlify/plugin-nextjs as dev dependency for optimized Next.js deployment
- Node.js version 20 specified in build environment

### Changed
- Updated next.config.ts with Netlify deployment comments

### Why
- Ensure proper deployment to Netlify platform
- Match configuration from example codebases (support-portal and component-demo)
- Enable Next.js server-side features on Netlify
- Set consistent Node.js version for builds

## [0.1.8] - 2025-11-26 17:26:29

### Added
- Full CRUD functionality with state-based operations (no API/DB)
- Edit dialog for single member editing with form validation
- Delete confirmation dialogs (single and bulk)
- Bulk edit dialog (placeholder for future implementation)
- Create new member functionality
- Case-based data loading - data only shows when case is selected
- Test data organized by case (5 cases with varying member counts)
- Toast notifications for all CRUD operations
- Empty state message when no case is selected

### Changed
- Data structure reorganized: CASE_DATA_MAP with data for each case (1-5)
- DataTable now receives selectedCase prop and loads data accordingly
- Toolbar passes selectedCase to DataTable via callback
- All operations work on local state (simulating API calls)

### Why
- Enable full CRUD workflow testing without backend
- Visualize edit/delete dialogs and user experience
- Test state management and data flow
- Ensure data is properly scoped to selected case
- Prepare foundation for future API integration
- Allow users to test all functionality locally

## [0.1.7] - 2025-11-26 17:17:46

### Added
- ClassMemberDataTable component with PrimeReact DataTable
- Selection column with checkboxes for multi-select functionality
- Actions column with edit/delete buttons for individual rows
- Data columns: Name, Email, Phone, Address, City, State, Zip Code, SSN, Date of Birth
- Pagination (10 rows per page, options: 5, 10, 25, 50)
- Global search/filter functionality
- Sortable columns
- Export to CSV functionality
- Bulk action toolbar buttons (Edit, Delete) - disabled when no selection
- TEST_DATA.ts with 10 sample class members for testing
- Toolbar with bulk actions and export button

### Why
- Create foundation for class member data visualization and management
- Enable multi-select for future bulk operations (edit/delete)
- Provide individual row actions (edit/delete buttons) that only affect that row
- Set up bulk action buttons in toolbar to prevent accidental bulk operations
- Establish data structure and test data for incremental development
- Follow PrimeReact DataTable patterns from example codebase

## [0.1.6] - 2025-11-26 16:57:31

### Added
- Toast notification when case selection changes
- CPTToast component integrated into data-manager page
- Toast displays "Case Changed: you are now viewing case: [caseName]" message

### Why
- Provide user feedback when switching between cases
- Improve UX by confirming case selection changes
- Use CPT PrimeReact toast component for consistent styling with theme

## [0.1.5] - 2025-11-26 16:52:04

### Changed
- Removed duplicate sticky theme toggle from root layout (now only in toolbar)
- Increased toolbar logo size from 32x32 to 56x56 pixels
- Improved toolbar alignment and centering for all sections (start, center, end)

### Why
- Eliminate duplicate theme toggle UI element
- Make logo more prominent and visible in toolbar
- Ensure proper vertical alignment of all toolbar elements for better visual consistency

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

