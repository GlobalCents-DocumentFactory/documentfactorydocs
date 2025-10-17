# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus-based documentation website for Document Factory (a document process automation platform). The site is deployed to GitHub Pages and features versioned documentation with blog support.

## Development Commands

### Local Development
- `npm start` or `yarn start` - Start local development server with live reload
- `npm run serve` or `yarn serve` - Serve production build locally

### Build & Deployment
- `npm run build` or `yarn build` - Generate static content into `build` directory
- `npm run deploy` or `yarn deploy` - Deploy to GitHub Pages
- `npm run typecheck` or `yarn typecheck` - TypeScript type checking

### Documentation Management
- `yarn docusaurus docs:version X.X.X` - Create new documentation version
- `npm run clear` or `yarn clear` - Clear Docusaurus cache

## Project Structure

### Key Directories
- `/docs/` - Main documentation content organized by feature areas:
  - `getting-started/` - Initial setup and basic usage
  - `pipeline/` - Document processing pipeline documentation
  - `client_tools/` - Client-side tools and utilities
  - `configuration/` - System configuration guides
  - `advanced-topics/` - Complex features and integrations
  - `external-components/` - Third-party integrations
- `/versioned_docs/` - Previous documentation versions
- `/blog/` - Blog posts
- `/src/` - Custom React components and pages
  - `/components/` - Reusable components (Youtube, DocImage, ColorPicker, etc.)
  - `/pages/` - Custom pages like homepage

### Configuration Files
- `docusaurus.config.ts` - Main Docusaurus configuration with GitHub Pages settings
- `sidebars.ts` - Auto-generated sidebar configuration
- `versions.json` - Documentation versioning (currently at version 24.0.0)

## Architecture Notes

- Uses Docusaurus 3.5.2 with TypeScript support
- Supports Mermaid diagrams in documentation
- Configured for GitHub Pages deployment to `globalcents-documentfactory.github.io/documentfactorydocs/`
- Auto-generated sidebar from file structure
- Custom CSS theming in `/src/css/custom.css`
- Supports both light and dark themes with Prism syntax highlighting

## Deployment

The site deploys to the `deploy` branch and is configured for GitHub Pages. Use environment variables for deployment:
- `GIT_USER=<username> npm run deploy` (macOS/Linux)
- `cmd /C "set GIT_USER=<user>&& npm run deploy"` (Windows)