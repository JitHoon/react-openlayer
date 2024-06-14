"use client";

import { ControlSection, MapContainer, ZoomFeature } from "react-openlayers7";
import styles from "../../page.module.css";

const ZoomFeatureUI = () => {
  /* EXPLAIN
    ZoomFeature 컴포넌트를 통해 우측 상단 지도의 줌 컨트롤 기능을 사용할 수 있습니다.
    지도의 줌 값이 max, min 각각의 값에 도달하면 해당 버튼이 비활성화 됩니다.
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Zoom Feature</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="300px"
      >
        <ControlSection>
          <ZoomFeature />
        </ControlSection>
      </MapContainer>
    </div>
  );
};

export default ZoomFeatureUI;
