import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {useColorMode} from '@docusaurus/theme-common';

import styles from './index.module.css';

// const backgroundImage = colorMode === 'dark'
//     ? 'url("img/circuit_primary_dark.svg")'
//     : 'url("img/circuit_primary.svg")';
// return (
//     <header
//         className={clsx(styles.heroBanner)}
//         style={{
//             position: 'relative',
//             background: `${backgroundImage} repeat center center`,
//             color: '#fff',
//             padding: '96px 0 64px 0',
//             overflow: 'hidden',
//
//         }}
//     >


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const { colorMode } = useColorMode();

  return (
    <header className={clsx(styles.heroBanner)}>
      <img 
        src={colorMode === 'dark' ? "/documentfactorydocs/img/hexagon-pattern-dark.svg" : "/documentfactorydocs/img/hexagon-pattern-light.svg"}
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
