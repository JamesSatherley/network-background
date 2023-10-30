import React from "react";

function Dots({ dots }) {
  return (
    <>
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
