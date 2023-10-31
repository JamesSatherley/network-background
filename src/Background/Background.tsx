import React, { useState, useEffect, useRef } from "react";
import Canvas from "../components/Canvas";
import Dots from "../components/Dots";
import { findIntersections, generateArr } from "../utils";
import Line from "classes/Line";
import { BackgroundProps } from "./BackgroundProps";

let canvas: any;

export const Background: React.FC<BackgroundProps>  = ({speedModifer = 200, amountOfDots= 100, lineDistance = 120, height, width}) => {
  const networkBackgroundRef = useRef<HTMLDivElement | null>(null);

  height = height ?? networkBackgroundRef.current?.clientHeight ?? window.innerHeight
  width = width ?? networkBackgroundRef.current?.clientWidth ?? window.innerWidth


  const [dots] = useState(generateArr(speedModifer, amountOfDots, height, width));
  const [lines, setLines] = useState(
    new Array(amountOfDots)
      .fill(null)
      .map(() => new Array(amountOfDots).fill(null))
  );

  const [deathLines, setDeathLines] = useState<Line[]>([]);
  const [ticker, setTicker] = useState(true);
  const [init, setInit] = useState(false);
  if(init) {
    console.log( height, networkBackgroundRef.current?.clientHeight, window.innerHeight)
  }
  useEffect(() => {
    if (!init) {
      canvas = document.querySelector("#canvas");
      canvas.width = width;
      canvas.height = height;
      setInit(true);
    }

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
          canvas
        );
        setTicker(!tick);
      });
    }
    call(ticker);
  }, [init, ticker, dots]);

  return (
    <div ref={networkBackgroundRef} className="overflow-hidden h-screen w-screen z-10">
      hi
      <Canvas width={width} height={height} />
      <Dots dots={dots} />
    </div>
  );
}
