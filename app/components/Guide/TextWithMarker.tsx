"use client";

import { CustomMarker, InnerText, MapContainer, icon } from "react-openlayers7";
import styles from "../../page.module.css";

icon.marker = "/images/marker-basic.png";
icon.selected = "/images/marker-selected.png";

const TextWithMarker = () => {
  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Text with Marker</h3>
      <MapContainer center={[126.840884, 35.190816]} width="100%" height="30vh">
        <CustomMarker center={[126.840884, 35.190816]}>
          <InnerText>Marker</InnerText>
        </CustomMarker>
      </MapContainer>
    </div>
  );
};

export default TextWithMarker;
