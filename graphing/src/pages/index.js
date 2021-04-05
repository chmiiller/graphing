import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  { title: '' },
  {
    title: 'GraphQL + React - First project',
    description: (
      <>
        Hi there, I'm <a target="_blank" href="https://github.com/chmiiller">Carlos Zinato</a> and this repo is
        just a reference project that I've made in order to understand and implement for the first time GraphQL
        and a React client for this server to clearly see how good and easy it is and why so many dev teams are using it today.
        <br/><br/>
        This project is based on a tutorial series by <a target="_blank" href="https://www.youtube.com/c/TheNetNinja">The Net Ninja </a>
        where we create a server with NodeJS, MongoDB and GraphQL for storing books and their authors. To browse through these collections
        we also develop a React client with some simple components to display and add new entries.
      </>
    ),
  },
  { title: '' },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Reference project to learn and understand GraphQL">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Documentation
            </Link>
          </div>
        </div>
      </header>
      <p className={styles.photoBy}>
        Photo by <a target="_blank" href="https://unsplash.com/@vlado">Vlado Paunovic</a>
      </p>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
