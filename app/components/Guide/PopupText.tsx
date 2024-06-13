"use client";

import { CustomMarker, InnerText, MapContainer, icon } from "react-openlayers7";
import styles from "../../page.module.css";

const PopupText = () => {
  // InnerText의 isPopup 속성을 사용하면 text를 숨길 수 있습니다.

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Popup Text</h3>
      <MapContainer center={[126.840884, 35.190816]} width="100%" height="30vh">
        <CustomMarker center={[126.840884, 35.190816]}>
          <InnerText isPopup>Marker</InnerText>
        </CustomMarker>
      </MapContainer>
    </div>
  );
};

export default PopupText;
