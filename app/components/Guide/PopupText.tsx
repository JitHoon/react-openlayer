"use client";

import { CustomMarker, InnerText, MapContainer, icon } from "react-openlayers7";
import styles from "../../page.module.css";

const PopupText = () => {
  // InnerText의 isPopup 속성을 사용하면 text를 숨길 수 있습니다.

  return (
    <MapContainer center={[126.840884, 35.190816]} width="30%" height="30vh">
      <h2 className={styles.title}>Popup Text</h2>
      <CustomMarker center={[126.840884, 35.190816]}>
        <InnerText isPopup>Marker</InnerText>
      </CustomMarker>
    </MapContainer>
  );
};

export default PopupText;
