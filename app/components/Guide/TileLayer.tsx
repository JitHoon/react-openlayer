"use client";

import { TileLayer, MapContainer } from "react-openlayers7";
import styles from "../../page.module.css";

const TileLayerUI = () => {
  /* EXPLAIN
    tms는 지도를 타일로 제공하기 위한 프로토콜입니다. (https://dulidungsil.tistory.com/entry/TMSWMSWFSWCSWPS)
    TileLayer의 url 속성에 tms로 만든 타일 맵 주소를 입력할 수 있습니다.
    
    다른 속성
    zIndex	number	default = 0, 화면에 보이는 레이어의 우선순위 설정입니다.
    minZoom	number	default = 0, tms 별로 설정된 max 레벨을 설정할 수 있습니다.
    maxZoom	number	default = 42, tms 별로 설정된 min 레벨을 설정할 수 있습니다.
    errorTileUrl	string	error 상황에서 표시할 타일 url 설정이 가능합니다.
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Tile Layer</h3>
      <MapContainer
        center={[126.840884, 35.190816]}
        width="100%"
        height="500px"
      >
        <TileLayer url="https://tgxe79f6wl.execute-api.ap-northeast-2.amazonaws.com/dev/dev-drone-square-bucket/public/1/manifold/orthomosaic_tiles/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default TileLayerUI;
