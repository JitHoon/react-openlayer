"use client";

import { MapContainer, GeoJsonLayer } from "react-openlayers7";
import styles from "../../page.module.css";

const GeoJsonLayerUI = () => {
  /* EXPLAIN
    GeoJSON(지오제이슨)은 위치정보를 갖는 점을 기반으로 체계적으로 지형을 표현하기 위해 설계된 개방형 공개 표준 형식입니다.
  */

  const geoJsonSample = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [102.0, 0.5] },
        properties: { prop0: "value0" },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [102.0, 0.0],
            [103.0, 1.0],
            [104.0, 0.0],
            [105.0, 1.0],
          ],
        },
        properties: {
          prop0: "value0",
          prop1: 0.0,
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [100.0, 0.0],
              [101.0, 0.0],
              [101.0, 1.0],
              [100.0, 1.0],
              [100.0, 0.0],
            ],
          ],
        },
        properties: {
          prop0: "value0",
          prop1: { this: "that" },
        },
      },
    ],
  };

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>GeoJson Layer</h3>
      <MapContainer
        center={[126.840884, 35.190816]}
        width="100%"
        height="300px"
      >
        <GeoJsonLayer color="blue" geoJson={geoJsonSample} />
      </MapContainer>
    </div>
  );
};

export default GeoJsonLayerUI;
