import styles from './ImageDescription.module.css'
export default function ImageDescription ({ image, description }) {
  return (
    <div className={styles.container}>
      <img src={image} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};
