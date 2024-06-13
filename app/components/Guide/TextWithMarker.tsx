"use client";
import { CustomMarker, InnerText, MapContainer, icon } from "react-openlayers7";
import styles from "../../page.module.css";

icon.marker = "/images/marker-basic.png";
icon.selected = "/images/marker-selected.png";

const TextWithMarker = () => {
  return (
    <MapContainer center={[126.840884, 35.190816]} width="30%" height="30vh">
      <h2 className={styles.title}>Text with Marker</h2>
      <CustomMarker center={[126.840884, 35.190816]}>
        <InnerText>Marker</InnerText>
      </CustomMarker>
    </MapContainer>
  );
};

export default TextWithMarker;
