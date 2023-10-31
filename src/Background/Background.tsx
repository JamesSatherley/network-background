import React, { useState, useEffect, useRef } from "react";
import Canvas from "../components/Canvas";
import Dots from "../components/Dots";
import { findIntersections, generateArr } from "../utils";
import Line from "classes/Line";
import { BackgroundProps } from "./BackgroundProps";
import Dot from "classes/Dot";

let canvas: any;

export const Background: React.FC<BackgroundProps> = ({
  speedModifer = 200,
  amountOfDots = 100,
  lineDistance = 120,
  height: initialHeight,
  width: initialWidth,
}) => {
  const [dots, setDots] = useState<Dot[]>([]); // Provide Dot[] as the initial state type
const [lines, setLines] = useState<(Line | null)[][]>([]); // Provide the correct type for lines
const [deathLines, setDeathLines] = useState<Line[]>([]); // Provide Line[] as the initial state type

  const [ticker, setTicker] = useState(true);
  const [init, setInit] = useState(false);
  const [height, setHeight] = useState<number | null>(null);
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    // Add an event listener to ensure the DOM content is loaded
    document.addEventListener("DOMContentLoaded", () => {
      const networkBackgroundElement = document.querySelector("#networkBackground");

      if (networkBackgroundElement) {
        const newHeight = networkBackgroundElement.clientHeight;
        const newWidth = networkBackgroundElement.clientWidth;

        // Update height and width if they are null or different
        if (newHeight !== height || newWidth !== width) {
          setHeight(newHeight);
          setWidth(newWidth);
        }
      }
    });

    if (!init) {
      canvas = document.querySelector("#canvas");
      canvas.width = width ?? initialWidth ?? window.innerWidth;
      canvas.height = height ?? initialHeight ?? window.innerHeight;
      setInit(true);
    }

    async function call(tick: boolean) {
      requestAnimationFrame(() => {
        // Check if height and width are still null, and if so, return to avoid calculations
        if (height === null || width === null) {
          return;
        }

        const newDots = generateArr(speedModifer, amountOfDots, height, width);
        setDots(newDots);

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
  }, [init, ticker, dots, height, width, initialHeight, initialWidth, amountOfDots, lineDistance, lines, deathLines]);

  if (height === null || width === null) {
    // Show a loading state while height and width are being determined
    return <div>Loading...</div>;
  }

  return (
    <div id="networkBackground" className="scrollbar-none overflow-hidden h-screen w-screen z-10">
      hi
      <Canvas width={width} height={height} />
      <Dots dots={dots} />
    </div>
  );
};
