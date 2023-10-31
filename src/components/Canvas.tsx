import React, { useRef } from "react";
import useCanvas from "../hooks/useCanvas";

interface CanvasProps {
  width: number;
  height: number;
}

const Canvas: React.FC<CanvasProps> = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useCanvas(canvasRef, width, height);

  return <canvas ref={canvasRef} id="canvas">canvas</canvas>;
};

export default Canvas;
