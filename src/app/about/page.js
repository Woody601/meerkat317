
import styles from './page.module.css';
import Image from 'next/image';

export default function About() {
  return (
    <main className={styles.about}>
      <section className={styles.introSection}>
        <h1>About Meerkats</h1>
        <div className={styles.imageContainer}>
          <Image
            src="/meerkat-about.jpg"
            width={800}
            height={500}
            className={styles.mainImage}
          />
        </div>
      </section>

      <section className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <h2>Physical Characteristics</h2>
          <ul>
            <li>Length: 10-14 inches (body) plus 7-10 inches (tail)</li>
            <li>Weight: 1.4-2.1 pounds</li>
            <li>Tan or light brown coat with dark stripes</li>
            <li>Dark patches around eyes</li>
            <li>Long, sharp claws for digging</li>
          </ul>
        </div>

        <div className={styles.infoCard}>
          <h2>Habitat</h2>
          <p>
            Meerkats live in the Kalahari Desert region of southern Africa, which includes:
          </p>
          <ul>
            <li>Botswana</li>
            <li>Namibia</li>
            <li>South Africa</li>
            <li>Angola</li>
          </ul>
        </div>

        <div className={styles.infoCard}>
          <h2>Behavior & Diet</h2>
          <p>
            Meerkats are highly social animals living in groups called mobs or gangs of up to 
            30 individuals. They are diurnal (active during the day) and spend much of their 
            time foraging and keeping watch for predators.
          </p>
          <h3>Diet includes:</h3>
          <ul>
            <li>Insects</li>
            <li>Spiders</li>
            <li>Snakes</li>
            <li>Lizards</li>
            <li>Scorpions</li>
            <li>Small rodents</li>
            <li>Birds' eggs</li>
          </ul>
        </div>

        <div className={styles.infoCard}>
          <h2>Social Structure</h2>
          <p>
            Meerkat groups have a complex social hierarchy with:
          </p>
          <ul>
            <li>One dominant breeding pair</li>
            <li>Subordinate helpers who assist with:</li>
            <li>Babysitting young</li>
            <li>Sentinel duty</li>
            <li>Teaching hunting skills</li>
            <li>Defending territory</li>
          </ul>
        </div>
      </section>

      <section className={styles.conservation}>
        <h2>Conservation Status</h2>
        <p>
          While meerkats are currently listed as "Least Concern" by the International Union 
          for Conservation of Nature (IUCN), they face various challenges including:
        </p>
        <ul>
          <li>Habitat loss due to human expansion</li>
          <li>Climate change affecting their desert ecosystem</li>
          <li>Limited range of suitable habitat</li>
        </ul>
      </section>

      <section className={styles.funFacts}>
        <h2>Fun Facts</h2>
        <div className={styles.factsList}>
          <div className={styles.fact}>
            <h3>Skilled Diggers</h3>
            <p>Can dig through sand equal to their body weight in just seconds</p>
          </div>
          <div className={styles.fact}>
          <h3>Immune System</h3>
            <p>They have developed immunity to certain snake and scorpion venoms</p>
          </div>
          <div className={styles.fact}>
            <h3>Sentinel Duty</h3>
            <p>Take turns as lookouts, standing on their hind legs to watch for predators</p>
          </div>
          <div className={styles.fact}>
            <h3>Social Learning</h3>
            <p>Adults teach pups hunting skills using progressive lessons</p>
          </div>
        </div>
      </section>

      <section className={styles.research}>
        <h2>Current Research</h2>
        <p>
          Scientists continue to study meerkat societies to better understand:
        </p>
        <ul>
          <li>Cooperative breeding behavior</li>
          <li>Social learning and teaching in animal societies</li>
          <li>Vocal communication systems</li>
          <li>Adaptation to harsh desert environments</li>
        </ul>
      </section>
    </main>
  );
}