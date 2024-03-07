import React from "react";

const ColorPicerOneComponent = ({
  color,
  setColor,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <>
      <div
        className="color-display"
        style={{
          backgroundColor: color,
          color: isDarkText ? "#000" : "#fff",
        }}
      >
        {color ? color : "No color set"}
      </div>
      <form>
        <input
          type="text"
          placeholder="Set a color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="color"
          value="#000000"
          onChange={(e) => setColor(e.target.value)}
        />
        <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
          Toggle text color
        </button>
      </form>
    </>
  );
};

export default ColorPicerOneComponent;
