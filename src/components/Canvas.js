import React, { useRef } from "react";
import useCanvas from "../hooks/useCanvas";

function Canvas() {
  const canvasRef = useRef(null);
  useCanvas(canvasRef);

  return <canvas ref={canvasRef} id="canvas"></canvas>;
}

export default Canvas;
