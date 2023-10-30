import { useEffect, RefObject } from "react";

function useCanvas(canvasRef: RefObject<HTMLCanvasElement>): void {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, [canvasRef]);
}

export default useCanvas;
