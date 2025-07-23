# Create Hexagon Background SVG Files

## Task
Create two animated hexagon pattern SVG files for the DocumentFactory homepage background with proper positioning and full screen coverage.

## Files to Create

### File: `static/img/hexagon-pattern-light.svg`
Create this file with the following content:

```svg
<svg viewBox="0 0 1400 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hexPattern" patternUnits="userSpaceOnUse" width="80" height="69.28" patternTransform="translate(-20, -10)">
      <polygon points="40,5.33 66.67,18.67 66.67,45.33 40,58.67 13.33,45.33 13.33,18.67" 
               fill="none" 
               stroke="#007acc" 
               stroke-width="1" 
               opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
      </polygon>
      <circle cx="40" cy="32" r="2" fill="#007acc" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
      </circle>
    </pattern>
  </defs>
  <rect x="-200" y="-100" width="1800" height="1000" fill="url(#hexPattern)"/>
</svg>
```

### File: `static/img/hexagon-pattern-dark.svg`
Create this file with the following content:

```svg
<svg viewBox="0 0 1400 800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="hexPattern" patternUnits="userSpaceOnUse" width="80" height="69.28" patternTransform="translate(-20, -10)">
      <polygon points="40,5.33 66.67,18.67 66.67,45.33 40,58.67 13.33,45.33 13.33,18.67" 
               fill="none" 
               stroke="#4a9eff" 
               stroke-width="1" 
               opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
      </polygon>
      <circle cx="40" cy="32" r="2" fill="#4a9eff" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
      </circle>
    </pattern>
  </defs>
  <rect x="-200" y="-100" width="1800" height="1000" fill="url(#hexPattern)"/>
</svg>
```

## Key Features

### Pattern Specifications
- **Pattern size**: 80x69.28px for optimal density
- **Pattern transform**: `translate(-20, -10)` for proper alignment with DF logo
- **Coverage area**: Extended rect with `x="-200" y="-100" width="1800" height="1000"` for full screen coverage

### Animations
- **Hexagon opacity**: Pulses from 0.3 to 0.7 over 4 seconds
- **Circle opacity**: Pulses from 0.5 to 1.0 over 3 seconds
- **Infinite repeat**: Both animations loop continuously

### Color Scheme
- **Light theme**: `#007acc` (blue)
- **Dark theme**: `#4a9eff` (lighter blue)

## Expected Result
- Animated hexagon pattern background
- Proper alignment with the DF logo in center
- Full screen coverage without gaps
- Smooth opacity animations
- Theme-appropriate colors

## Directory Structure
Ensure the `static/img/` directory exists before creating these files.