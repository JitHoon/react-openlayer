"use client";

import {
  ControlSection,
  FullScreenFeature,
  MapContainer,
} from "react-openlayers7";
import styles from "../../page.module.css";

const FullScreenUI = () => {
  /* EXPLAIN
    FullScreenFeature 컴포넌트를 통해 지도의 전체화면 여부를 결정할 수 있습니다.
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Full Screen</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="300px"
      >
        <ControlSection>
          <FullScreenFeature />
        </ControlSection>
      </MapContainer>
    </div>
  );
};

export default FullScreenUI;
