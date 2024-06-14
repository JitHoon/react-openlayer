/* 
const useFullScreen = () => {
  const map = useMap();
  const ref = a$1.useRef(null);
  const onBtnRef = a$1.useRef(null);
  const offBtnRef = a$1.useRef(null);
  const [isFull, setIsFull] = a$1.useState(false);

  const makeFull = () => {
    var _a;
    (_a = onBtnRef.current) === null || _a === void 0 ? void 0 : _a.click();
  };

  const makeUnFull = () => {
    var _a;
    (_a = offBtnRef.current) === null || _a === void 0 ? void 0 : _a.click();
  };

  const toggleFullScreen = () => {
    if (isFull) {
      makeUnFull();
    } else {
      makeFull();
    }
  };

  const onFull = () => {
    setIsFull(true);
  };
  const offFull = () => {
    setIsFull(false);
  };

  useEffectIfMounted(() => {
    if (!map) return;
    const targetMapId = map.getTargetElement().getAttribute("id");
    onBtnRef.current = document.querySelector(
      `#${CSS.escape(targetMapId)} .ol-full-screen-false`
    );
    offBtnRef.current = document.querySelector(
      `#${CSS.escape(targetMapId)} .ol-full-screen-true`
    );
  }, [isFull, map]);

  a$1.useEffect(() => {
    if (!map || !ref.current) return;
    const fullScreenSource = new control.FullScreen({
      target: ref.current,
    });
    fullScreenSource.on("enterfullscreen", onFull);
    fullScreenSource.on("leavefullscreen", offFull);
    map.addControl(fullScreenSource);
    return () => {
      map.removeControl(fullScreenSource);
      fullScreenSource.un("enterfullscreen", onFull);
      fullScreenSource.un("leavefullscreen", offFull);
    };
  }, [map]);
  
  return {
    isFull,
    toggleFullScreen,
    makeFull,
    makeUnFull,
    ref,
  };
};
*/
