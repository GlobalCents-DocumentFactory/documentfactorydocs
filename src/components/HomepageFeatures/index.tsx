import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Document Workflow Automation',
        Svg: require('@site/static/img/home_integration.svg').default,
        description: (
            <>
                Document Factory allows to automatically create, edit, and manage documents without manual intervention,
                significantly saving time and reducing errors.
            </>
        ),
    },
    {
        title: 'Flexible Integration',
        Svg: require('@site/static/img/home_automation.svg').default,
        description: (
            <>
                The platform easily integrates with other business applications and systems, making it a versatile
                solution for companies of all sizes.
            </>
        ),
    },
    {
        title: 'Flexible Document Management',
        Svg: require('@site/static/img/home_workflow.svg').default,
        description: (
            <>
                The system enables you to configure document workflow rules, control access, and audit changes.
                This ensures full control and data security.
            </>
        ),
    }
];




function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
