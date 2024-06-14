"use client";

import styles from "./page.module.css";
import "react-openlayers7/dist/index.css";

import IntroMap from "./components/Setup/IntroMap";

import TextWithMarker from "./components/Guide/TextWithMarker";
import PopupText from "./components/Guide/PopupText";
import SyncMapUI from "./components/Guide/SyncMap";
import VectorLayers from "./components/Guide/VectorLayers";
import CaptureMapUI from "./components/Guide/CaptureMap";
import TileLayerUI from "./components/Guide/TileLayer";
import GeoJsonLayerUI from "./components/Guide/GeoJsonLayer";
import LayerzIndex from "./components/Guide/LayerzIndex";
import LayerGroupUI from "./components/Guide/LayerGroup";
import ImageOverayUI from "./components/Guide/ImageOveray";

import CompassWheelUI from "./components/Control/CompassWheelUi";
import ZoomFeatureUI from "./components/Control/ZoomFeatureUI";
import FullScreenUI from "./components/Control/FullScreen";
import DrawingToolsUI from "./components/Control/DrawingTools";
import CustomToolsUI from "./components/Control/CustomTool";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2 className={styles.category}>Intro</h2>
      <div className={styles.categoryBox}>
        <IntroMap />
      </div>

      <h2 className={styles.category}>Guide</h2>
      <div className={styles.categoryBox}>
        <TextWithMarker />
        <PopupText />
        <SyncMapUI />
        <VectorLayers />
        <CaptureMapUI />
        <TileLayerUI />
        <GeoJsonLayerUI />
        <LayerzIndex />
        <LayerGroupUI />
        <ImageOverayUI />
      </div>

      <h2 className={styles.category}>Controls</h2>
      <div className={styles.categoryBox}>
        <CompassWheelUI />
        <ZoomFeatureUI />
        <FullScreenUI />
        <DrawingToolsUI />
        <CustomToolsUI />
      </div>
    </main>
  );
}
