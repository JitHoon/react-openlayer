"use client";

import { ImageOverlay, MapContainer } from "react-openlayers7";
import styles from "../../page.module.css";

const ImageOverayUI = () => {
  /* EXPLAIN
    bounds | [[number,number],[number,number]] | 왼쪽 아래 경위도, 오른쪽 위 경위도
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Image Overay</h3>
      <MapContainer
        center={[126.840884, 35.190816]}
        width="100%"
        height="300px"
      >
        <ImageOverlay
          imageUrl="/images/choi.jpg"
          bounds={[
            [126.83984, 35.190016],
            [126.841984, 35.191516],
          ]}
        />
      </MapContainer>
    </div>
  );
};

export default ImageOverayUI;
