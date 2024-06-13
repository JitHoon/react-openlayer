"use client";

import {
  CustomPolygon,
  InnerText,
  LayerGroup,
  MapContainer,
  TileLayer,
} from "react-openlayers7";
import styles from "../../page.module.css";

const IntroMap = () => {
  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Setup Map</h3>
      <MapContainer
        center={[126.840884, 35.190816]}
        width="100%"
        height="300px"
      >
        <TileLayer url="https://tgxe79f6wl.execute-api.ap-northeast-2.amazonaws.com/dev/dev-drone-square-bucket/public/1/manifold/orthomosaic_tiles/{z}/{x}/{y}.png" />
        <LayerGroup zIndex={1}>
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
            <InnerText>Marker</InnerText>
          </CustomPolygon>
        </LayerGroup>
      </MapContainer>
    </div>
  );
};

export default IntroMap;
