# Start Context Documentation

## Changelog Requirements

### Update Process
- **With every code update**, you must add an entry to `CHANGELOG.md` that includes:
  - Summary of updates (what was changed)
  - Small info explaining why it was done
  - Timestamp (current date and time)
  - Version number from `package.json`

### Timestamp Guidelines
- Timestamp must be **today's current date**
- Cursor often has issues getting the date wrong
- **Always use real-time** - if needed, run a JavaScript function or terminal function to get the current time
- Format: `YYYY-MM-DD HH:mm:ss` (e.g., `2025-11-26 13:55:58`)

### Version Number Management

#### Semantic Versioning
- We use [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH)
- Format: `X.Y.Z` (e.g., `0.1.0`, `1.3.45`, `2.1.21`)

#### Version Increment Rules
- **Commits must correspond with version number**
- **Never have commits with the same version number**
- **Each commit must increment the version**

#### Who Can Increment What
- **Major version (X.0.0)**: Only the user can authorize increments to major versions (1.0.0, 2.0.0, etc.)
- **Minor and Patch versions (0.X.Z)**: AI can update minor and patch numbers (e.g., 0.1.1, 0.2.0, 1.3.45, 2.1.21)

#### Examples
- Current version: `0.1.0`
- AI can increment to: `0.1.1`, `0.2.0`, `0.2.1`, etc.
- AI **cannot** increment to: `1.0.0`, `2.0.0`, etc. (requires user authorization)

### Changelog Entry Format

```markdown
## [VERSION] - TIMESTAMP

### Added/Changed/Fixed/Removed
- Description of change
- Why: Brief explanation of why this change was made
```

### Example Entry

```markdown
## [0.1.1] - 2025-11-26 14:30:00

### Added
- New utility function for data validation
- Why: Needed to validate user input before processing to prevent errors
```

