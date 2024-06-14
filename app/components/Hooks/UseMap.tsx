"use client";

import { MapContainer, useMap } from "react-openlayers7";
import styles from "../../page.module.css";

const GetMapAndView = () => {
  const map = useMap();
  const view = map.getView();

  console.log("map", map);
  console.log("view", view);
  return <></>;
};

const UseFullMap = () => {
  /* EXPLAIN
    useMap 훅을 통해 현재 사용하는 지도 인스턴스 객체를 Context로부터 가져와 사용할 수 있습니다.
    이때 MapContainer로 감싸져 있는 컴포넌트 안에서만 map을 가져올 수 있습니다.
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>useFullMap</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="300px"
      >
        <GetMapAndView />
      </MapContainer>
    </div>
  );
};

export default UseFullMap;
