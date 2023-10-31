import React, { useEffect } from "react";

interface CanvasProps {
  width: number;
  height: number;
}

const Canvas: React.FC<CanvasProps> = ({ width, height }: CanvasProps) => {
  useEffect(() => {
    const canvas = document.querySelector("#canvas") as HTMLCanvasElement;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        canvas.width = width;
        canvas.height = height;
        // Additional canvas setup and drawing code if needed
      }
    }
  }, [width, height]);

  return <canvas id="canvas">canvas</canvas>;
};

export default Canvas;
