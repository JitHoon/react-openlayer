"use client";

import {
  CustomCircle,
  CustomMultiPoint,
  CustomPolyLine,
  CustomPolygon,
  CustomRectangle,
  InnerText,
  MapContainer,
  TextMarker,
} from "react-openlayers7";
import styles from "../../page.module.css";

const VectorLayers = () => {
  /* EXPLAIN
    react-openlayers7은 Marker, TextMarker, Polygon, Polyline, Circle, MultiPoint, Rectangle 어노테이션 형태를 제공합니다.
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Vector Layers</h3>
      <MapContainer
        center={[126.840884, 35.190816]}
        width="100%"
        height="290px"
      >
        <CustomMultiPoint
          positions={[
            [126.841784, 35.190616],
            [126.840476, 35.190219],
            [126.840604, 35.190133],
            [126.841268, 35.190381],
          ]}
        />
        <CustomPolygon
          positions={[
            [
              [126.840884, 35.190816],
              [126.840676, 35.190419],
              [126.840804, 35.190333],
              [126.841068, 35.190581],
              [126.840884, 35.190816],
            ],
          ]}
        >
          <InnerText>Polygon</InnerText>
        </CustomPolygon>
        <CustomPolyLine
          positions={[
            [126.839884, 35.190816],
            [126.839676, 35.190419],
            [126.839804, 35.190333],
            [126.840068, 35.190581],
            [126.840384, 35.190816],
          ]}
        >
          <InnerText>Polyline</InnerText>
        </CustomPolyLine>
        <CustomCircle center={[126.841884, 35.191516]} radius={20} color="RED">
          <InnerText>Circle</InnerText>
        </CustomCircle>
        <CustomRectangle
          positions={[
            [
              [126.841884, 35.191316],
              [126.841676, 35.191316],
              [126.841676, 35.190833],
              [126.841884, 35.190833],
            ],
          ]}
        >
          <InnerText>Rectangle</InnerText>
        </CustomRectangle>
        <TextMarker center={[126.839884, 35.190816]}>
          <InnerText>TextMarker</InnerText>
        </TextMarker>
      </MapContainer>
    </div>
  );
};

export default VectorLayers;
