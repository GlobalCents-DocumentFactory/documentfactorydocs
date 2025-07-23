# Replace Inline SVG with External Files

## Task
Replace the inline SVG hexagon pattern in `src/pages/index.tsx` with external SVG files that support theme switching.

## File to Update: `src/pages/index.tsx`

### 1. Update HomepageHeader function

Replace this entire block:
```jsx
<svg className={styles.hexagonPattern} viewBox="0 0 1400 800">
  <defs>
    <pattern id="hexPattern" patternUnits="userSpaceOnUse" width="120" height="104">
      <polygon points="60,8 94,26 94,62 60,80 26,62 26,26"
               fill="none"
               stroke="var(--hex-stroke)"
               strokeWidth="1"
               opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
      </polygon>
      <circle cx="60" cy="44" r="3" fill="var(--hex-stroke)" opacity="0.5">
        <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite"/>
      </circle>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#hexPattern)"/>
</svg>
```

With this:
```jsx
<img 
  src={colorMode === 'dark' ? '/img/hexagon-pattern-dark.svg' : '/img/hexagon-pattern-light.svg'} 
  alt="" 
  className={styles.hexagonPattern}
  aria-hidden="true"
/>
```

### 2. Complete updated HomepageHeader function

The final HomepageHeader function should look like this:

```jsx
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { colorMode } = useColorMode();

  return (
    <header className={clsx(styles.heroBanner)}>
      <img 
        src={colorMode === 'dark' ? '/img/hexagon-pattern-dark.svg' : '/img/hexagon-pattern-light.svg'} 
        alt="" 
        className={styles.hexagonPattern}
        aria-hidden="true"
      />
      
      <div className="container">
        <div className={styles.heroLogo}>DF</div>
        <h1>DocumentFactory</h1>
        <p>Automate, manage, and secure your enterprise documents with DocumentFactory.</p>
        <div style={{ textAlign: 'center' }}>
            <Link
              className={clsx("button button--secondary button--lg", styles.learnMoreBtn)}
              to="/docs/introduction">
              Learn More
            </Link>
        </div>
      </div>
    </header>
  );
}
```

## Expected Result
- The inline SVG will be replaced with external files
- Theme switching will work automatically (light/dark SVG files)
- Background pattern will be properly positioned with the fixes from external files
- All existing styling and functionality remains intact

## Prerequisites
Make sure the external SVG files exist:
- `static/img/hexagon-pattern-light.svg`
- `static/img/hexagon-pattern-dark.svg`

## Benefits of This Change
- Better file organization
- Easier maintenance of SVG patterns
- Proper theme support with different files
- Fixed positioning issues from external files