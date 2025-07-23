import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {useColorMode} from '@docusaurus/theme-common';

import styles from './index.module.css';


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

function ContactSection() {
  return (
      <section style={{background: '#23272F', color: '#fff', padding: '32px 0'}}>
        <div className="container" style={{textAlign: 'center'}}>
          <h4 style={{marginBottom: 8}}>Ready to transform your document management?</h4>
          <p style={{marginBottom: 16}}>Contact us at <a href="mailto:info@globalcents.com" style={{color: '#F9B233'}}>info@globalcents.com</a></p>
          <Link
              className="button button--secondary button--md"
              to="/docs/introduction"
              style={{background: '#F9B233', color: '#23272F', fontWeight: 600, borderRadius: 6}}
          >
            Get Started
          </Link>
        </div>
      </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout
          title={`Hello from ${siteConfig.title}`}
          description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
        {/*<ContactSection />*/}
      </Layout>
  );
}
