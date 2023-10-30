import { useEffect } from "react";

function useCanvas(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, [canvasRef]);
}

export default useCanvas;
