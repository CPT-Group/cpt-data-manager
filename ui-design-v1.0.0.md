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
5. User sees DataTable with class member data
6. User can select multiple rows for bulk operations
7. User can edit/delete individual rows via action buttons
8. User can perform bulk edit/delete via toolbar buttons

## DataTable Component

### Phase 1 - Basic Setup (Current)
- **Selection Column**: Checkboxes for multi-select (first column)
- **Action Column**: Edit/Delete buttons per row (last column)
- **Data Columns**: Name, Email, Phone, Address, City, State, Zip Code, SSN, Date of Birth
- **Features**:
  - Pagination (10 rows per page, options: 5, 10, 25, 50)
  - Global search/filter
  - Sortable columns
  - Export to CSV
  - Bulk action buttons in toolbar (Edit, Delete) - disabled when no selection
- **Test Data**: TEST_DATA.ts with 10 sample class members

### Phase 2 - CRUD Operations (Future)
- Edit dialog for single row editing
- Bulk edit dialog for multiple rows
- Delete confirmation dialogs (single and bulk)
- Create new member functionality
- Form validation
- Toast notifications for operations

### Data Structure
```typescript
interface ClassMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  ssn: string;
  dateOfBirth: string;
  caseId: number;
}
```

## Notes
- Theme toggle currently sticky on top-left for home page
- Theme toggle will be moved to toolbar end section for data-manager page
- All styling comes from PrimeReact theme - no custom colors
- Individual row actions only affect that specific row
- Bulk actions in toolbar only work on selected rows (prevents accidental bulk operations)

