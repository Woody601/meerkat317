"use client";
import ImageDescription from "@/components/ImageDescription";
import styles from "./page.module.css";
export default function Gallery() {
  return (
    <main>
      <h1 className={styles.title}>Gallery</h1>
      <div className={styles.imageContainer}>
        <ImageDescription
          image="meerkat-hero.jpg"
          description="Lorem ipsum odor amet, consectetuer adipiscing elit."
        ></ImageDescription>
        <ImageDescription
          image="meerkat-hero.jpg"
          description="Lorem ipsum odor amet, consectetuer adipiscing elit."
        ></ImageDescription>
        <ImageDescription
          image="meerkat-hero.jpg"
          description="Lorem ipsum odor amet, consectetuer adipiscing elit."
        ></ImageDescription>
        <ImageDescription
          image="meerkat-hero.jpg"
          description="Lorem ipsum odor amet, consectetuer adipiscing elit."
        ></ImageDescription>
      </div>
    </main>
  );
}
