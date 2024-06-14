"use client";

import { MapContainer, useMapRotation } from "react-openlayers7";
import styles from "../../page.module.css";
import { useEffect, useState } from "react";

const RotationFeature = () => {
  const [rotationDegree, setRotate, resetRotation] = useMapRotation();
  const [degree, setDegree] = useState(rotationDegree);

  useEffect(() => {
    if (degree === 360) setRotate(0);
    else setRotate(degree);
  }, [degree]);

  return (
    <>
      <button
        className={styles.buttonStyle}
        onClick={() => {
          setDegree((pre) => pre + 30);
        }}
      >
        <span>{degree}</span>
      </button>
      <button
        className={styles.buttonStyle}
        onClick={() => {
          resetRotation;
          setDegree(0);
        }}
      >
        <span>Reset</span>
      </button>
    </>
  );
};

const UseMapRotationUI = () => {
  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>useMapRotation</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="300px"
      >
        <RotationFeature />
      </MapContainer>
    </div>
  );
};

export default UseMapRotationUI;
