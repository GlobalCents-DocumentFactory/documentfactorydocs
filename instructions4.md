# SVG Background Pattern Fix

## Problem
The hexagon background pattern is misaligned relative to the DF logo and doesn't cover the full width of the screen, leaving gaps on the sides.

## Task
Fix only the two SVG background files to correct positioning and coverage. Do not modify any other files.

## Files to Update

### File: `static/img/hexagon-pattern-light.svg`
Make these 2 changes:

1. **Add pattern transform** - In the `<pattern>` tag, add the attribute:
   ```svg
   patternTransform="translate(-20, -10)"
   ```

2. **Extend coverage area** - Replace the `<rect>` element:
   ```svg
   <!-- Replace this: -->
   <rect width="100%" height="100%" fill="url(#hexPattern)"/>
   
   <!-- With this: -->
   <rect x="-200" y="-100" width="1800" height="1000" fill="url(#hexPattern)"/>
   ```

### File: `static/img/hexagon-pattern-dark.svg`
Apply the **exact same 2 changes** as above to the dark version:
- Add `patternTransform="translate(-20, -10)"` to the `<pattern>` tag
- Replace the `<rect>` element with extended coordinates and dimensions

## Expected Result
- Pattern will be properly centered relative to the DF logo
- Full screen coverage without side gaps
- Background animation continues to work properly
- Both light and dark themes have consistent positioning

## Important Notes
- Only modify these 2 SVG files
- Do not change any other files (CSS, JSX, etc.)
- Preserve all existing animations and styling
- Keep the same file structure and naming