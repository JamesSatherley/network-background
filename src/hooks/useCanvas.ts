import { useEffect, RefObject } from "react";

function useCanvas(canvasRef: RefObject<HTMLCanvasElement>, width: number, height: number): void {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = width;
      canvas.height = height;
    }
  }, [canvasRef]);
}

export default useCanvas;
