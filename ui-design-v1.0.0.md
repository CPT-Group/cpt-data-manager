# UI Design v1.0.0

## Overview
This document tracks the UI design decisions and implementation details for CPT Data Manager version 1.0.0.

CPT Data Manager is an application to help visualize and edit data for class members. This will be built incrementally in small pieces, ensuring each piece works before continuing, following our versioning process.

## Application Purpose
- Visualize and edit data for class members
- Incremental development approach (small pieces, test before continuing)
- Similar to support portal (support request intake) and component showcase (component approval)

## Design Goals
- Use only CPT PrimeReact or PrimeReact components
- No custom colors - all theming handled by PrimeReact theme
- Only basic layout utilities (centering, flex, etc.) - no custom styling
- For nested components (tab panels, accordion panels), use PrimeReact directly
- For most other components, use CPT PrimeReact wrapper

## Components

### Header/Toolbar
- **Location**: Top of `/data-manager` page (not sticky)
- **Component**: PrimeReact Toolbar
- **Structure**:
  - **Start**: Logo/icon button (clickable, alert for now)
  - **Center**: Case selector dropdown with label
    - Dummy data structure: `{id: string; label: string; caseName: string; caseId: number}`
  - **End**: Theme toggle button (moved from top-left sticky position)

## Layout Structure
- **Home Page** (`/`): Landing page with "Get Started" button
- **Data Manager Page** (`/data-manager`): Main application page with toolbar header

## User Flows
1. User lands on home page
2. User clicks "Get Started" → navigates to `/data-manager`
3. User sees toolbar with case selector and theme toggle
4. User can select case from dropdown to load data set

## Notes
- Theme toggle currently sticky on top-left for home page
- Theme toggle will be moved to toolbar end section for data-manager page
- All styling comes from PrimeReact theme - no custom colors

