"use client";

import {
  ControlSection,
  /* NOTE
    SyncMap이 import 되지 않습니다.
    hint로 SyncMapContext이 뜨며 공식 문서에서 찾아볼 수 없습니다.
  */
  SyncMapGroup,
} from "react-openlayers7";
import styles from "./page.module.css";

const SyncMap = () => {
  return (
    <SyncMapGroup rotate={90}>
      {/*<SyncMap>*/}
      <ControlSection>
        <h1>hello</h1>
      </ControlSection>
      {/*</SyncMap>*/}
      {/*<SyncMap>*/}
      <ControlSection>
        <h1>hello</h1>
      </ControlSection>
      {/*</SyncMap>*/}
    </SyncMapGroup>
  );
};

export default SyncMap;
