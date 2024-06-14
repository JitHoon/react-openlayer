"use client";

import {
  CustomCircle,
  InnerText,
  MapContainer,
  useSelectAnnotation,
} from "react-openlayers7";
import styles from "../../page.module.css";
import { useEffect, useState } from "react";

const SelectAnnotationFeature = () => {
  const selectedAnnotation = useSelectAnnotation();
  const [geometryID, setGeometryID] = useState<string>("-");

  useEffect(() => {
    const geometry = selectedAnnotation?.getGeometry();
    const geometryID = geometry?.ol_uid as string;
    if (geometryID) setGeometryID(geometryID);
  }, [selectedAnnotation]);

  return <span>{`${geometryID} ID Layer를 선택하셨습니다.`}</span>;
};

const UseSelectAnnotationUI = () => {
  /* EXPLAIN
    useSelectAnnotation을 사용하게 되면 openlayers 이벤트중 "singleclick" 이벤트가 추가됩니다.
    클릭한 어노테이션을 상태로 반환합니다.
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>useSelectAnnotation</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="300px"
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
        <SelectAnnotationFeature />
      </MapContainer>
    </div>
  );
};

export default UseSelectAnnotationUI;
