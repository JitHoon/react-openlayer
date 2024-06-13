"use client";

import { MapContainer, CaptureMap } from "react-openlayers7";
import styles from "../../page.module.css";

const CaptureMapUI = () => {
  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Capture Map</h3>
      <MapContainer center={[126.840884, 35.190816]} width="100%" height="30vh">
        <CaptureMap
          onCaptured={(img) => {
            console.log(
              "map rendering이 마무리 되면 onCaptured를 통해 바로바로 이미지 바이너리를 생성할 수 있습니다.",
              img
            );
          }}
        />
      </MapContainer>
    </div>
  );
};

export default CaptureMapUI;
