"use client";

import styles from "./page.module.css";
import "react-openlayers7/dist/index.css";

import IntroMap from "./components/Setup/IntroMap";
import TextWithMarker from "./components/Guide/TextWithMarker";

export default function Home() {
  return (
    <main className={styles.main}>
      <IntroMap />
      <TextWithMarker />
    </main>
  );
}