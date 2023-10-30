import React from "react";

const Buttons = ({
  speedModifer,
  setSpeedModifer,
  amountOfDots,
  setAmountOfDots,
  lineDistance,
  setLineDistance,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label
          for="speedModiferInput"
          style={{ color: "white", padding: "1rem" }}
        >
          Adjust speed modifer
        </label>
        <input
          id="speedModiferInput"
          style={{
            width: "3rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            marginRight: "1rem",
            backgroundColor: "inherit",
            border: "solid 1px white",
            borderRadius: "0.5rem",
            color: "white",
          }}
          type="number"
          value={speedModifer}
          onChange={(e) => setSpeedModifer(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label
          for="amountOfDotsInput"
          style={{ color: "white", padding: "1rem" }}
        >
          Adjust dots quantity
        </label>
        <input
          id="amountOfDotsInput"
          style={{
            width: "3rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            marginRight: "1rem",
            backgroundColor: "inherit",
            border: "solid 1px white",
            borderRadius: "0.5rem",
            color: "white",
          }}
          type="number"
          value={amountOfDots}
          onChange={(e) => setAmountOfDots(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label
          for="lineDistanceInput"
          style={{ color: "white", padding: "1rem" }}
        >
          Adjust line distance
        </label>
        <input
          id="lineDistanceInput"
          style={{
            width: "3rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            marginRight: "1rem",
            backgroundColor: "inherit",
            border: "solid 1px white",
            borderRadius: "0.5rem",
            color: "white",
          }}
          type="number"
          value={lineDistance}
          onChange={(e) => setLineDistance(e.target.value)}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            width: "9rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            marginRight: "1rem",
            backgroundColor: "inherit",
            border: "solid 1px white",
            borderRadius: "0.5rem",
            color: "white",
            cursor: "pointer",
            marginBottom: "0.7rem",
          }}
          onClick={() => {
            setSpeedModifer(200);
            setAmountOfDots(100);
            setLineDistance(120);
          }}
        >
          Reset
        </button>
        <button
          style={{
            width: "9rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
            marginRight: "1rem",
            backgroundColor: "inherit",
            border: "solid 1px white",
            borderRadius: "0.5rem",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => window.location.reload()}
        >
          See Changes
        </button>
      </div>
    </div>
  );
};

export default Buttons;
