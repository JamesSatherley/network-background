import Dot from "./classes/Dot";
import Line from "./classes/Line";
import React from 'react'

export function generateArr(speedModifer: number, amountOfDots: number, height: number, width: number): Dot[] {
  return Array(amountOfDots)
    .fill(null)
    .map(() => {
      const arr = getRandomVelocities(speedModifer);
      return new Dot(
        randomIntFromInterval(10, width - 10),
        randomIntFromInterval(10, height - 10),
        arr[0],
        arr[1],
        width,
        height,
        randomIntFromInterval(0, 2)
      );
    });
}

function clearCanvas(canvas: HTMLCanvasElement): void {
  const ctx = canvas.getContext("2d");
  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function getRandomVelocities(speedModifer: number): [number, number] {
  const x = randomIntFromInterval(0, 100);
  const y = 100 - x;
  let i = 1;
  let j = 1;
  if (Math.random() < 0.5) i = -1;
  if (Math.random() < 0.5) j = -1;
  return [(x / speedModifer) * i, (y / speedModifer) * j];
}

function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function findIntersections(
  dots: Dot[],
  lines: (Line | null)[][],
  setLines: React.Dispatch<React.SetStateAction<(Line | null)[][]>>,
  deathLines: Line[],
  setDeathLines: React.Dispatch<React.SetStateAction<Line[]>>,
  amountOfDots: number,
  lineDistance: number,
  canvas: HTMLCanvasElement
): void {
  clearCanvas(canvas);
  const arr: (Line | null)[][] = new Array(amountOfDots)
    .fill(null)
    .map(() => new Array(amountOfDots).fill(null));
  for (let i = 0; i < dots.length; i++) {
    const element_i = dots[i];
    for (let j = 0; j < dots.length; j++) {
      const element_j = dots[j];
      if (
        element_i.x + lineDistance > element_j.x &&
        element_i.x - lineDistance < element_j.x &&
        element_i.y + lineDistance > element_j.y &&
        element_i.y - lineDistance < element_j.y
      ) {
        if (lines[i][j] != null) {
          arr[i][j] = lines[i][j];
          arr[i][j]!.dotOne = element_i;
          arr[i][j]!.dotTwo = element_j;
        } else {
          arr[i][j] = new Line(element_i, element_j, canvas);
        }
      } else if (lines[i][j] != null) {
        let line = lines[i][j]!;
        line.dead = true;
        setDeathLines([...deathLines, line]);
      }
    }
  }
  setLines(arr);

  for (let index = 0; index < deathLines.length; index++) {
    if (deathLines[index].deadCount > 0) {
      setDeathLines(deathLines.filter((item) => item !== deathLines[index]));
    } else {
      deathLines[index].draw();
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < dots.length; j++) {
      const elem = arr[i][j];
      if (elem) {
        elem.draw();
      }
    }
  }
}
