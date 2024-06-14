"use client";

import { MapContainer, useFullScreen } from "react-openlayers7";
import styles from "../../page.module.css";

const UseFullScreen = () => {
  /* EXPLAIN
    useFullScreen 훅을 통해 
    현재 사용하는 지도 인스턴스 객체의 전체화면을 컨트롤 할 수 있습니다.

    [내부 로직] (hooks 폴더 참고)

      // ...

        const toggleFullScreen = () => {
          if (isFull) {
            makeUnFull();
          } else {
            makeFull();
        }
      
      // ...
  */

  /* NOTE
    toggleFullScreen 동작 X
  */

  const { isFull, toggleFullScreen, makeFull, makeUnFull, ref } =
    useFullScreen();

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>useFullScreen</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="300px"
      >
        <button
          ref={ref}
          className={styles.buttonStyle}
          onClick={toggleFullScreen}
        >
          {isFull ? "닫기" : "전체화면"}
        </button>
      </MapContainer>
    </div>
  );
};

export default UseFullScreen;
