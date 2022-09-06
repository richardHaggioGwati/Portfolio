import { useState, useEffect } from "react";

interface Props {
  width: number
  height: number
}

function useWindowResize() {
    const [windowSize, setWindowSize] = useState<Props>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

export default useWindowResize;
