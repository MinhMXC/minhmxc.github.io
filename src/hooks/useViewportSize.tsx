import { useEffect, useState } from "react";

export default function useViewportSize() {
  const [dimensions, setDimensions] = useState([window.innerWidth, window.innerHeight]);
  const handleWindowSizeChange = () => {
    setDimensions([window.innerWidth, window.innerHeight]);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return dimensions;
};
