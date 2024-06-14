"use client";

import { ControlSection, DrawingTools, MapContainer } from "react-openlayers7";
import styles from "../../page.module.css";

const DrawingToolsUI = () => {
  /* EXPLAIN
    [onCanvas]
      DrawingTools 의 onCanvas property를 false하게 되면(지우면)
      맵 위에 Drawing을 하더라도 표시까지 이어지지 않습니다.
      
      Event를 활용해 그려질 feature를 받아낼 수 있습니다.
      클라이언트와 서버간 통신을 위한 기능입니다.

    [Tool Options]
      특정 어노테이션 형태에 대한 옵션을 false로 바꾸면,
      해당 기능이 DrawingTools에서 사라집니다.
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Drawing Tools</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="300px"
      >
        <ControlSection>
          <DrawingTools onCanvas marker={false} polyline={false} />
        </ControlSection>
      </MapContainer>
    </div>
  );
};

export default DrawingToolsUI;
