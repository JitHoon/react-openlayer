"use client";

import { ControlSection, SyncMap, SyncMapGroup } from "react-openlayers7";
import styles from "../../page.module.css";

const SyncMapUI = () => {
  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>SyncMap</h3>
      <SyncMapGroup rotate={90}>
        <SyncMap>
          <ControlSection>
            <h1>동기화 기능</h1>
          </ControlSection>
        </SyncMap>
        <SyncMap>
          <ControlSection>
            <h1>동기화 기능</h1>
          </ControlSection>
        </SyncMap>
      </SyncMapGroup>
    </div>
  );
};

export default SyncMapUI;
