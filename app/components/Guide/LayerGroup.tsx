"use client";

import {
  CustomCircle,
  InnerText,
  LayerGroup,
  MapContainer,
} from "react-openlayers7";
import styles from "../../page.module.css";

const LayerGroupUI = () => {
  /* EXPLAIN
    LayerGroup 을 사용하면 여러가지 어노테이션, 레이어들을 그루핑이 가능하고
    LayerGroup의 zIndex설정을 통해 일괄적인 우선 순위를 설정할 수 있습니다.
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Layer Group</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="500px"
      >
        <LayerGroup zIndex={1}>
          <CustomCircle
            center={[126.841884, 35.191516]}
            radius={20}
            color="RED"
          >
            <InnerText>Circle1</InnerText>
          </CustomCircle>
        </LayerGroup>
        <LayerGroup zIndex={2}>
          <CustomCircle
            center={[126.841784, 35.191406]}
            radius={20}
            color="BLUE"
          >
            <InnerText>Circle2</InnerText>
          </CustomCircle>
        </LayerGroup>
      </MapContainer>
    </div>
  );
};

export default LayerGroupUI;
