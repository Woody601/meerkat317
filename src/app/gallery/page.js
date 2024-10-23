"use client";
import ImageDescription from "@/components/ImageDescription";
import styles from "./page.modules.css";
export default function Gallery() {
  return (
    <main>
      <h1>Gallery</h1>
      <div className={styles.imageContainer}>
          <ImageDescription
            image="meerkat-hero.jpg"
            description="Example of the image with the description"
          ></ImageDescription>
          <ImageDescription
            image="meerkat-hero.jpg"
            description="Example of the image with the description"
          ></ImageDescription>
          <ImageDescription
            image="meerkat-hero.jpg"
            description="Example of the image with the description"
          ></ImageDescription>
          <ImageDescription
            image="meerkat-hero.jpg"
            description="Example of the image with the description"
          ></ImageDescription>
        </div>
    </main>
  );
}
