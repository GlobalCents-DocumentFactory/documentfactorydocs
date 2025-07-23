# DocumentFactory Homepage Design Instructions

## Overview
Transform the existing Docusaurus homepage to match the provided modern design with animated elements, smooth theme transitions, and professional styling.

## Exact Design Specifications

### 1. HomepageHeader Component

**Container Styling:**
- Remove current background image logic
- Use CSS gradient background: `linear-gradient(135deg, var(--ifm-background-color) 0%, var(--ifm-color-emphasis-200) 100%)`
- Padding: `6rem 2rem` (96px 32px)
- Position: relative with overflow hidden

**Animated Background Pattern:**

Create an SVG hexagonal pattern overlay:
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
Logo Replacement:
```jsx
<div className={styles.heroLogo}>DF</div>
```
- Size: 120px x 120px
- Background: #F9B233 (keep existing color)
- Border-radius: 50%
- Font-size: 3rem
- Font-weight: bold
- Color: white
- Box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1)
- Add floating animation: @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }

Typography Updates:

- H1: font-size: 3.5rem, font-weight: 800
- Add gradient text effect: background: linear-gradient(135deg, var(--ifm-font-color-base) 0%, #F9B233 100%)
- Use -webkit-background-clip: text and -webkit-text-fill-color: transparent
- Paragraph: font-size: 1.25rem, max-width: 600px, margin: auto

Button Styling:

- Padding: 1rem 2.5rem
- Border-radius: 12px (instead of 6px)
- Font-size: 1.1rem
- Font-weight: 600
- Box-shadow: 0 10px 30px rgba(249, 178, 51, 0.3)
- Hover transform: translateY(-2px)
- Hover shadow: 0 15px 40px rgba(249, 178, 51, 0.4)

2. CSS Variables (index.module.css)
```css
:root {
  --hex-stroke: #007acc;
  --hex-fill: rgba(0, 122, 204, 0.1);
}

[data-theme='dark'] {
  --hex-stroke: #4a9eff;
  --hex-fill: rgba(74, 158, 255, 0.15);
}

.heroLogo {
  width: 120px;
  height: 120px;
  background: #F9B233;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  box-shadow: 0 20px 40px var(--ifm-color-emphasis-300);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hexagonPattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 1;
}

.heroBanner {
  position: relative;
  background: linear-gradient(135deg, var(--ifm-background-color) 0%, var(--ifm-color-emphasis-200) 100%);
  overflow: hidden;
  padding: 6rem 2rem;
}

.heroBanner .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.heroBanner h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--ifm-font-color-base) 0%, #F9B233 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
}

.heroBanner p {
  font-size: 1.25rem;
  color: var(--ifm-color-emphasis-700);
  margin-bottom: 2.5rem;
  max-width: 600px;
  text-align: center;
}

.learnMoreBtn {
  background: #F9B233 !important;
  color: #23272F !important;
  padding: 1rem 2.5rem !important;
  border-radius: 12px !important;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(249, 178, 51, 0.3);
  transition: all 0.3s ease;
  border: none !important;
}

.learnMoreBtn:hover {
  background: #ff7a28 !important;
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(249, 178, 51, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .heroBanner {
    padding: 4rem 1rem;
  }
  
  .heroBanner h1 {
    font-size: 2.5rem;
  }
  
  .heroBanner p {
    font-size: 1.1rem;
  }
  
  .heroLogo {
    width: 100px;
    height: 100px;
    font-size: 2.5rem;
  }
}
```
3. Complete Component Structure
```jsx
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { colorMode } = useColorMode();

  return (
    <header className={clsx(styles.heroBanner)}>
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
      
      <div className="container">
        <div className={styles.heroLogo}>DF</div>
        <h1>DocumentFactory</h1>
        <p>Automate, manage, and secure your enterprise documents with DocumentFactory.</p>
        <Link
          className={clsx("button button--secondary button--lg", styles.learnMoreBtn)}
          to="/docs/introduction">
          Learn More
        </Link>
      </div>
    </header>
  );
}
```
4. Key Implementation Notes

- Remove all inline styles from the current component
- Replace the current SVG logo with the heroLogo div
- Remove the background image logic - replace with CSS gradient
- Add the hexagonal pattern SVG as the first child of the header
- Use CSS modules for all styling instead of inline styles
- Ensure proper CSS variable usage for theme compatibility
- Keep all existing Docusaurus imports and functionality

5. Testing Requirements

- Test theme switching (light/dark)
- Test responsive behavior on mobile
- Verify animations work smoothly
- Check accessibility (focus states, contrast)
- Ensure button hover states work properly

This should produce exactly the same modern, animated design as shown in the artifact while maintaining full Docusaurus compatibility.


Here are the additional detailed instructions for the SVGs and feature boxes:
markdown

# Additional Instructions: Feature Boxes and SVGs

## HomepageFeatures Component Updates

### 1. Feature Box Styling (Replace existing styles)

```css
/* Add to index.module.css or create new featureBoxes.module.css */

.featureBox {
  background: var(--ifm-background-color);
  border-radius: 20px;
  padding: 3rem 2rem;
  text-align: center;
  border: 1px solid var(--ifm-color-emphasis-300);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 20px var(--ifm-color-emphasis-200);
}

.featureBox::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #F9B233, #4a9eff);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.featureBox:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 60px var(--ifm-color-emphasis-400);
}

.featureBox:hover::before {
  transform: translateX(0);
}

.featureIcon {
  width: 100px;
  height: 100px;
  margin: 0 auto 2rem;
  display: block;
}

.featureTitle {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--ifm-font-color-base);
}

.featureDescription {
  color: var(--ifm-color-emphasis-700);
  line-height: 1.7;
  font-size: 1rem;
}

.featuresGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .featuresGrid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 4rem 1rem;
  }
  
  .featureBox {
    padding: 2rem 1.5rem;
  }
}
2. Complete SVG Specifications
SVG 1: Document Workflow Automation
jsx<svg className={styles.featureIcon} viewBox="0 0 100 100">
  <defs>
    <linearGradient id="workflowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#F9B233'}}/>
      <stop offset="100%" style={{stopColor: '#4a9eff'}}/>
    </linearGradient>
  </defs>
  {/* Document stack */}
  <rect x="20" y="30" width="25" height="35" rx="3" fill="url(#workflowGrad)" opacity="0.8"/>
  <rect x="25" y="25" width="25" height="35" rx="3" fill="url(#workflowGrad)" opacity="0.9"/>
  <rect x="30" y="20" width="25" height="35" rx="3" fill="url(#workflowGrad)"/>
  {/* Lines on documents */}
  <line x1="35" y1="28" x2="50" y2="28" stroke="white" strokeWidth="1"/>
  <line x1="35" y1="32" x2="48" y2="32" stroke="white" strokeWidth="1"/>
  <line x1="35" y1="36" x2="52" y2="36" stroke="white" strokeWidth="1"/>
  {/* Automation gear */}
  <circle cx="70" cy="50" r="12" fill="none" stroke="#F9B233" strokeWidth="2"/>
  <circle cx="70" cy="50" r="8" fill="#F9B233" opacity="0.3"/>
  {/* Animated gear teeth */}
  <g>
    <rect x="69" y="38" width="2" height="6" fill="#F9B233"/>
    <rect x="69" y="56" width="2" height="6" fill="#F9B233"/>
    <rect x="82" y="49" width="6" height="2" fill="#F9B233"/>
    <rect x="52" y="49" width="6" height="2" fill="#F9B233"/>
    <animateTransform attributeName="transform" type="rotate" 
      values="0 70 50;360 70 50" dur="4s" repeatCount="indefinite"/>
  </g>
  {/* Arrow showing flow */}
  <path d="M58 45 L62 50 L58 55" fill="none" stroke="#F9B233" 
    strokeWidth="2" strokeLinecap="round"/>
</svg>
SVG 2: Flexible Integration
jsx<svg className={styles.featureIcon} viewBox="0 0 100 100">
  <defs>
    <linearGradient id="integrationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#4a9eff'}}/>
      <stop offset="100%" style={{stopColor: '#F9B233'}}/>
    </linearGradient>
  </defs>
  {/* Central hub */}
  <circle cx="50" cy="50" r="15" fill="url(#integrationGrad)"/>
  <circle cx="50" cy="50" r="10" fill="white" opacity="0.9"/>
  {/* Connected nodes */}
  <circle cx="20" cy="25" r="8" fill="#F9B233" opacity="0.8"/>
  <circle cx="80" cy="25" r="8" fill="#F9B233" opacity="0.8"/>
  <circle cx="20" cy="75" r="8" fill="#F9B233" opacity="0.8"/>
  <circle cx="80" cy="75" r="8" fill="#F9B233" opacity="0.8"/>
  {/* Connection lines */}
  <line x1="35" y1="40" x2="28" y2="33" stroke="#4a9eff" strokeWidth="2" opacity="0.7"/>
  <line x1="65" y1="40" x2="72" y2="33" stroke="#4a9eff" strokeWidth="2" opacity="0.7"/>
  <line x1="35" y1="60" x2="28" y2="67" stroke="#4a9eff" strokeWidth="2" opacity="0.7"/>
  <line x1="65" y1="60" x2="72" y2="67" stroke="#4a9eff" strokeWidth="2" opacity="0.7"/>
  {/* Animated data flow */}
  <circle r="2" fill="#F9B233">
    <animateMotion dur="3s" repeatCount="indefinite">
      <path d="M28,33 Q35,40 50,50 Q65,60 72,67"/>
    </animateMotion>
  </circle>
  {/* Icons in nodes - use simple shapes instead of emoji */}
  <rect x="18" y="23" width="4" height="4" fill="white" rx="1"/>
  <rect x="78" y="23" width="4" height="4" fill="white" rx="1"/>
  <circle cx="20" cy="75" r="2" fill="white"/>
  <rect x="78" y="73" width="4" height="4" fill="white" rx="2"/>
</svg>
SVG 3: Flexible Document Management
jsx<svg className={styles.featureIcon} viewBox="0 0 100 100">
  <defs>
    <linearGradient id="managementGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{stopColor: '#4a9eff'}}/>
      <stop offset="100%" style={{stopColor: '#F9B233'}}/>
    </linearGradient>
  </defs>
  {/* Person silhouette */}
  <circle cx="35" cy="25" r="8" fill="url(#managementGrad)"/>
  <path d="M35 35 Q30 40 25 50 Q30 55 35 60 Q40 55 45 50 Q40 40 35 35" 
    fill="url(#managementGrad)"/>
  {/* Documents/folders */}
  <rect x="55" y="20" width="20" height="15" rx="2" fill="#F9B233" opacity="0.8"/>
  <rect x="60" y="40" width="20" height="15" rx="2" fill="#F9B233" opacity="0.8"/>
  <rect x="65" y="60" width="20" height="15" rx="2" fill="#F9B233" opacity="0.8"/>
  {/* Control elements */}
  <circle cx="58" cy="27" r="2" fill="white"/>
  <circle cx="63" cy="27" r="2" fill="white"/>
  <circle cx="68" cy="27" r="2" fill="white"/>
  {/* Security shield */}
  <path d="M75 45 Q85 40 85 50 Q85 65 75 70 Q65 65 65 50 Q65 40 75 45" 
    fill="#4a9eff" opacity="0.3"/>
  <path d="M75 48 Q80 46 80 52 Q80 60 75 62 Q70 60 70 52 Q70 46 75 48" 
    fill="#4a9eff"/>
  {/* Lock icon */}
  <rect x="73" y="53" width="4" height="4" rx="0.5" fill="white"/>
  <path d="M73 53 Q73 51 75 51 Q77 51 77 53" fill="none" stroke="white" strokeWidth="0.8"/>
  {/* Connection lines */}
  <line x1="45" y1="45" x2="55" y2="40" stroke="#4a9eff" strokeWidth="1.5" opacity="0.6"/>
  <line x1="48" y1="50" x2="60" y2="47" stroke="#4a9eff" strokeWidth="1.5" opacity="0.6"/>
</svg>
3. HomepageFeatures Component Structure
jsx// In HomepageFeatures/index.tsx or similar
import styles from './styles.module.css'; // or import from index.module.css

const FeatureList = [
  {
    title: 'Document Workflow Automation',
    Svg: () => (
      // SVG 1 code here
    ),
    description: (
      <>
        Document Factory allows to automatically create, edit, and manage documents 
        without manual intervention, significantly saving time and reducing errors.
      </>
    ),
  },
  {
    title: 'Flexible Integration',
    Svg: () => (
      // SVG 2 code here
    ),
    description: (
      <>
        The platform easily integrates with other business applications and systems, 
        making it a versatile solution for companies of all sizes.
      </>
    ),
  },
  {
    title: 'Flexible Document Management',
    Svg: () => (
      // SVG 3 code here
    ),
    description: (
      <>
        The system enables you to configure document workflow rules, control access, 
        and audit changes. This ensures full control and data security.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={styles.featureBox}>
      <div className="text--center">
        <Svg className={styles.featureIcon} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section>
      <div className={styles.featuresGrid}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
4. Animation and Interaction Details

Hover Transform: Each box lifts 8px on hover with smooth transition
Top Border Animation: Gradient line slides in from left to right on hover
SVG Animations:

Gear rotates continuously (4s duration)
Data flow particle moves along curved path (3s duration)
All animations should use repeatCount="indefinite"


Box Shadow: Increases on hover for depth effect
Transition Duration: All transitions should be 0.3s ease

5. Color Variables for Theme Support
css/* Add these to support both light and dark themes */
:root {
  --feature-bg: var(--ifm-background-color);
  --feature-border: var(--ifm-color-emphasis-300);
  --feature-shadow: var(--ifm-color-emphasis-200);
  --feature-text: var(--ifm-font-color-base);
  --feature-description: var(--ifm-color-emphasis-700);
}

[data-theme='dark'] {
  --feature-shadow: rgba(0, 0, 0, 0.3);
}
6. Responsive Breakpoints

Desktop: 3 columns, 350px minimum width
Tablet: 2 columns or 1 column depending on screen size
Mobile: 1 column, reduced padding
Grid Gap: 3rem on desktop, 2rem on mobile

This will create the exact same professional, animated feature boxes with custom SVGs that match the modern design aesthetic.
