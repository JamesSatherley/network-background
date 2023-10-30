import React, { useState, useEffect } from "react";
import "./App.css";
import Canvas from "./components/Canvas";
import Dots from "./components/Dots";
import { findIntersections, generateArr } from "./utils";
import Line from "classes/Line";

let canvas: any;

interface BackgroundProps {
  speedModifer?: number;
  amountOfDots?: number;
  lineDistance?: number;
}

export const App: React.FC<BackgroundProps>  = ({speedModifer = 200, amountOfDots= 100, lineDistance = 120}) => {

  const [speedModiferState, setSpeedModifer] = useState(speedModifer)
  const [amountOfDotsState, setAmountOfDots] = useState(amountOfDots)
  const [lineDistanceState, setLineDistance] = useState(lineDistance)


  const [dots] = useState(generateArr(speedModiferState, amountOfDotsState));
  const [lines, setLines] = useState(
    new Array(amountOfDotsState)
      .fill(null)
      .map(() => new Array(amountOfDotsState).fill(null))
  );
  const [deathLines, setDeathLines] = useState<Line[]>([]);
  const [ticker, setTicker] = useState(true);
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) {
      canvas = document.querySelector("#canvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log(canvas.width, document.body.clientWidth);
      console.log(canvas.height, document.body.clientHeight);
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
          amountOfDotsState,
          lineDistanceState,
          canvas
        );
        setTicker(!tick);
      });
    }
    call(ticker);
  }, [init, ticker, dots]);

  return (
    <>
      <Canvas />
      <Dots dots={dots} />
    </>
  );
}
