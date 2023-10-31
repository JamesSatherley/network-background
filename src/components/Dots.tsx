import React from "react";

interface Dot {
  class: string;
  x: number;
  y: number;
}

interface DotsProps {
  dots: Dot[];
}

function Dots({ dots }: DotsProps) {
  return (
    <>
    hi
      {dots.map((dot, index) => (
        <div
          key={index}
          className={`circle ${dot.class}`}
          style={{ left: dot.x, top: dot.y }}
        ></div>
      ))}
    </>
  );
}

export default Dots;
