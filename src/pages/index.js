import React from 'react';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './page-garde.module.css';
import Link from '@docusaurus/Link';
import profileImage from './img/animeicespice.png'; // Ajustez le chemin selon l'emplacement

export default function Home() {
  return (
    <Layout title="Bienvenue" description="Page de garde de mon site">
      <main className={styles.mainContainer}>
        {/* Rectangle englobant tous les éléments */}
        <div className={styles.rectangle}>
          <section className={styles.avatarSection}>
            <div className="avatar avatar--vertical">
              <Link to="/Chokatech-Doc/aboutme"> 
                <img
                  className={clsx('avatar__photo', styles.avatarPhoto)}
                  src={profileImage}
                  alt="icespice"
                  style={{ width: '300px', height: '300px' }}
                />
              </Link>
              <div className="avatar__intro">
                <div
                  className={styles.avatarName}
                >
                  Choco-Doc
                </div>
                <div style={{ marginBottom: '10px' }} /> {/* Espace supplémentaire */}
                <small className={styles.avatarSubtitle}>
                  Bienvenue sur mon site dédié à de la documentation.
                </small>
              </div>
            </div>
          </section>
          <section className={styles.welcomeSection}>
            <h1>Prêt à vous lancer ?</h1>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/Chokatech-Doc/docs/Introduction"
              >
                Commencer
              </Link>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
