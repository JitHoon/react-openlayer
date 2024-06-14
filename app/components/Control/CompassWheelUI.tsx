"use client";

import { CompassWheel, MapContainer } from "react-openlayers7";
import styles from "../../page.module.css";

const CompassWheelUI = () => {
  /* EXPLAIN
    CompassWheel을 통해 현재 지도의 방위각을 파악할 수 있습니다.
    낫침반을 마우스로 조장하면 방위각을 조정할 수 있습니다.

    방위각(azimuth, meridian angle)은 구면좌표계에서 잰 각도이며,
    원점에 있는 관측자로부터 대상까지의 벡터를 기준 평면에 수직으로 투영하여서
    그것이 기준 평면 위에 있는 기준 벡터와 이루는 각으로 계산된다.
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Compass Wheel</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="300px"
      >
        <CompassWheel />
      </MapContainer>
    </div>
  );
};

export default CompassWheelUI;
