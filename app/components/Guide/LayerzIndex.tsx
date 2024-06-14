"use client";

import { CustomCircle, InnerText, MapContainer } from "react-openlayers7";
import styles from "../../page.module.css";

const LayerzIndex = () => {
  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Layer zIndex</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="500px"
      >
        <CustomCircle
          center={[126.841884, 35.191516]}
          radius={20}
          color="RED"
          zIndex={1}
        >
          <InnerText>Circle1</InnerText>
        </CustomCircle>
        <CustomCircle
          center={[126.841784, 35.191406]}
          radius={20}
          color="BLUE"
          zIndex={2}
        >
          <InnerText>Circle2</InnerText>
        </CustomCircle>
      </MapContainer>
    </div>
  );
};

export default LayerzIndex;
