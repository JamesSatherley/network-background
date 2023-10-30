import React, { useState, useEffect } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Canvas from "./components/Canvas";
import Dots from "./components/Dots";
import { findIntersections, generateArr } from "./utils";
import useLocalStorage from "./hooks/useLocalStorage";

let canvas;

function App() {
  const [
    speedModifer,
    setSpeedModifer,
    amountOfDots,
    setAmountOfDots,
    lineDistance,
    setLineDistance,
  ] = useLocalStorage(
    "speedModifer",
    200,
    "amountOfDots",
    100,
    "lineDistance",
    120
  );

  const [dots] = useState(generateArr(speedModifer, amountOfDots));
  const [lines, setLines] = useState(
    new Array(amountOfDots)
      .fill(null)
      .map(() => new Array(amountOfDots).fill(null))
  );
  const [deathLines, setDeathLines] = useState([]);
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

    async function call(tick) {
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
    <>
      <Buttons
        speedModifer={speedModifer}
        setSpeedModifer={setSpeedModifer}
        amountOfDots={amountOfDots}
        lineDistance={lineDistance}
        setLineDistance={setLineDistance}
      />
      <Canvas />
      <Dots dots={dots} />
    </>
  );
}

export default App;
