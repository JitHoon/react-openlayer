"use client";

import styles from "./page.module.css";
import "react-openlayers7/dist/index.css";

import IntroMap from "./components/Setup/IntroMap";
import TextWithMarker from "./components/Guide/TextWithMarker";
import PopupText from "./components/Guide/PopupText";

export default function Home() {
  return (
    <main className={styles.main}>
      <IntroMap />
      <TextWithMarker />
      <PopupText />
    </main>
  );
}
