import PropTypes from "prop-types";
const ColorDisplay = ({ color, isDarkText }) => {
  return (
    <div
      className="color-display"
      style={{
        backgroundColor: color,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      {color ? color : "No color set"}
    </div>
  );
};

ColorDisplay.defaultProps = {
  color: "No color set",
};

export default ColorDisplay;
