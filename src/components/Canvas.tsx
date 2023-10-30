import React, { useRef } from "react";
import useCanvas from "../hooks/useCanvas";

function Canvas() {
  // Declare a type for the canvasRef using the HTMLCanvasElement type
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useCanvas(canvasRef);

  return <canvas ref={canvasRef} id="canvas"></canvas>;
}

export default Canvas;
