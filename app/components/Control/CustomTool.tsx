"use client";

import {
  Button,
  ControlGroup,
  ControlSection,
  MapContainer,
} from "react-openlayers7";
import styles from "../../page.module.css";

const CustomToolsUI = () => {
  /* EXPLAIN
    ControlSection 은 지도 왼쪽위 컨트롤섹션을 의미합니다.
    ControlGroup 을 통해 여러가지 버튼을 각각 그루핑할 수 있습니다.

    [Button Properties]
      isDisabled	boolean	default = false 버튼의 비활성화 여부를 조정 합니다.
      isActive	booelan	default = false, 버튼이 클릭된 상태인지를 나타냅니다.
      onClick	() => void	버튼을 클릭하면 실행할 콜백함수를 설정할 수 있습니다.
      side	top , bottom , middle , solo	default = middle 버튼이 어떤 위치에 있느냐에 따라 모서리 모양이 결정됩니다. 이 property는 보통 ControlGroup이 일괄 설정합니다.
  */

  /* NOTE
    isDisabled, isActive 응용법
  */

  return (
    <div className={styles.layerContainer}>
      <h3 className={styles.title}>Custom Tools</h3>
      <MapContainer
        center={[126.841784, 35.191406]}
        width="100%"
        height="500px"
      >
        <ControlSection>
          <ControlGroup>
            <Button
              isDisabled={true}
              isActive
              onClick={() => console.log("Tool Click")}
              side={"middle"}
            >
              func
            </Button>
          </ControlGroup>
          <ControlGroup>
            <Button>func</Button>
            <Button>func</Button>
          </ControlGroup>
        </ControlSection>
      </MapContainer>
    </div>
  );
};

export default CustomToolsUI;
