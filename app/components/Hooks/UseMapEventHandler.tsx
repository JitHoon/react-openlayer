"use client";

import { MapContainer, useMapEventHandler } from "react-openlayers7";
import styles from "../../page.module.css";

const MapEventFeature = () => {
  useMapEventHandler({
    onClick: ({ event, lonlat }) => {
      console.log("onClickevent", event);
      console.log("onClicklonlat", lonlat);
    },
    onHover: ({ event, lonlat }) => {
      console.log("onHoverevent", event);
      console.log("onHoverlonlat", lonlat);
    },
    onLoaded: (event) => {
      console.log("onLoadedevent", event);
    },
    onLoadStart: (event) => {
      console.log("onLoadStartevent", event);
    },
  });

  return <></>;
};

const UseMapEventHandlerUI = () => {
  /* EXPLAIN
    onClick	({ event, lonlat }) => void	마우스 클릭한 좌표와 이벤트를 반환하고, annotation 위에서 클릭했다면 event에서 annotation feature를 확인할 수 있습니다.
    onHover	({ event, lonlat }) => void	마우스를 호버링하고 있는 좌표와 이벤트를 반환하고, annotation 위에서 클릭했다면 event에서 annotation feature를 확인할 수 있습니다.
    onLoaded	(event) => void	지도의 로딩이 마무리되면 발생하는 이벤트 입니다.
    onLoadStart	(event) => void	지도의 로딩을 시작하면서 발생하는 이벤트 입니다.
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>useMapEventHandler</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="300px"
      >
        <MapEventFeature />
      </MapContainer>
    </div>
  );
};

export default UseMapEventHandlerUI;
