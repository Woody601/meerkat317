import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
      <Image
        src="/meerkat-hero.jpg"
        alt="Meerkat standing guard"
        fill
        priority
        className={styles.heroImage}
      />
        <div className={styles.heroContent}>
          <h1>Protecting Meerkats and Their Habitats</h1>
          <p>Dedicated to the conservation and study of these remarkable creatures</p>
        </div>
      </div>

      <main>
        <section className={styles.mission}>
          <h2>Our Mission</h2>
          <p>
            The Meerkat Conservation Group is committed to protecting and preserving meerkat
            populations across Southern Africa through research, education, and community
            engagement.
          </p>
        </section>

        <section className={styles.initiatives}>
          <h2>Our Conservation Efforts</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Habitat Protection</h3>
              <p>
                We work to preserve and protect natural meerkat habitats in the Kalahari
                Desert, ensuring these social creatures have safe spaces to thrive.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Research Programs</h3>
              <p>
                Our team conducts ongoing research to better understand meerkat behavior,
                social structures, and environmental needs.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Community Education</h3>
              <p>
                We engage with local communities to promote understanding and cooperation
                in meerkat conservation efforts.
              </p>
            </div>

            
          </div>
        </section>

        <section className={styles.impact}>
          <h2>Our Impact</h2>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>15+</h3>
              <p>Years of Conservation</p>
            </div>
            <div className={styles.stat}>
              <h3>50+</h3>
              <p>Protected Colonies</p>
            </div>
            <div className={styles.stat}>
              <h3>1000+</h3>
              <p>Meerkats Protected</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
