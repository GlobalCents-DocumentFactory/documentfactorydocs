import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from '@site/src/pages/index.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Document Workflow Automation',
    Svg: require('@site/static/img/document-workflow-automation.svg').default,
    description: (
      <>
        Document Factory allows to automatically create, edit, and manage documents 
        without manual intervention, significantly saving time and reducing errors.
      </>
    ),
  },
  {
    title: 'Flexible Integration',
    Svg: require('@site/static/img/flexible-integration.svg').default,
    description: (
      <>
        The platform easily integrates with other business applications and systems, 
        making it a versatile solution for companies of all sizes.
      </>
    ),
  },
  {
    title: 'Flexible Document Management',
    Svg: require('@site/static/img/document-management.svg').default,
    description: (
      <>
        The system enables you to configure document workflow rules, control access, 
        and audit changes. This ensures full control and data security.
      </>
    ),
  },
];

function Feature({Svg, title, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
