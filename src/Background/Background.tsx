import React, { useState, useEffect, useRef } from "react";
import { findIntersections, generateArr } from "../utils";
import { BackgroundProps } from "./BackgroundProps";
import Line from "classes/Line";
import Dot from "classes/Dot";

export const Background: React.FC<BackgroundProps>  = ({speedModifer = 200, amountOfDots= 100, lineDistance = 120, height, width}) => {
  const [dots, setDots] = useState<Dot[]>([]);
  const [lines, setLines] = useState(
    new Array(amountOfDots)
      .fill(null)
      .map(() => new Array(amountOfDots).fill(null))
  );
  const [deathLines, setDeathLines] = useState<Line[]>([]);
  const [ticker, setTicker] = useState(true);
  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const networkBackgroundElement = document.querySelector("#networkBackground");
    height = height ?? networkBackgroundElement?.clientHeight ?? window.innerHeight
    width = width ?? networkBackgroundElement?.clientWidth ?? window.innerWidth

    setDots(generateArr(speedModifer, amountOfDots, height, width))

    if (!init) {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
        setInit(true);
      }
    }
    setLoading(false)
  }, []);

  async function call(tick: boolean) {
    requestAnimationFrame(() => {
      dots.forEach((dot) => dot.update());
      findIntersections(
        dots,
        lines,
        setLines,
        deathLines,
        setDeathLines,
        amountOfDots,
        lineDistance,
        canvasRef.current 
      );
      setTicker(!tick);
    });
  }
  call(ticker);

  return (
    <>
      {loading && <div>Loading...</div>}
      <div id="networkBackground" className="scrollbar-none overflow-hidden h-screen w-screen z-10">
        <canvas ref={canvasRef}>canvas</canvas>;
        {dots.map((dot, index) => (
          <div
            key={index}
            className={`circle ${dot.class}`}
            style={{ left: dot.x, top: dot.y }}
          />
        ))}
      </div>
    </>
  );
}
