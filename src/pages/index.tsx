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

    const backgroundImage = colorMode === 'dark'
        ? 'url("img/circuit_primary_dark.svg")'
        : 'url("img/circuit_primary.svg")';
  return (
      <header
          className={clsx(styles.heroBanner)}
          style={{
            position: 'relative',
            background: `${backgroundImage} repeat center center`,
            color: '#fff',
            padding: '96px 0 64px 0',
            overflow: 'hidden',

          }}
      >
        <div
            className="container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
        >
          {/* Logo as SVG (inline, no external resource) */}
          <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{marginBottom: 24}}
          >
            <circle cx="60" cy="60" r="56" fill="#F9B233" fillOpacity="0.12" />
            <rect x="35" y="35" width="50" height="50" rx="12" fill="#F9B233" />
            <text x="60" y="70" textAnchor="middle" fontSize="28" fontWeight="bold" fill="#23272F" fontFamily="sans-serif">
              DF
            </text>
          </svg>
          <h1 style={{fontSize: '2.8rem', fontWeight: 700, marginBottom: 16}}>
            DocumentFactory
          </h1>
          <p style={{fontSize: '1.3rem', maxWidth: 600, textAlign: 'center', marginBottom: 32}}>
            Automate, manage, and secure your enterprise documents with DocumentFactory.
          </p>
          <Link
              className={clsx("button button--secondary button--lg", styles.learnMoreBtn)}
              to="/docs/introduction"
              style={{background: '#F9B233', color: '#23272F', fontWeight: 600, borderRadius: 6}}
          >
            Learn More
          </Link>
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
