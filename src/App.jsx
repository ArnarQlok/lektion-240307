import { useState } from "react";

import "./App.css";
import ConditionalRendering from "./ConditionalRendering";
import Counter from "./Counter";
import ColorDisplay from "./color-picker/ColorDisplay";
import ColorInput from "./color-picker/ColorInput";
import ColorPicerOneComponent from "./color-picker/ColorPicerOneComponent";

function App() {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [textInput, setTextInput] = useState("");
  // Color Picker states
  const [color, setColor] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  console.log(isDarkText);
  // functions
  function handleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }
  function handleInput(e) {
    setTextInput(e.target.value);
  }

  return (
    <>
      {/* Color picker i en komponent */}
      <ColorPicerOneComponent
        color={color}
        setColor={setColor}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />

      {/* Color Picker med separata komponenter */}
      {/* <ColorDisplay color={color} isDarkText={isDarkText} />
      <ColorInput
        color={color}
        setColor={setColor}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      /> */}
      {/* <p>{textInput}</p>
      <input type="text" value={textInput} onChange={(e) => handleInput(e)} />
      <ConditionalRendering
        username="Arnar"
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        handleLogin={handleLogin}
      /> */}
      {/* <Counter /> */}
    </>
  );
}

export default App;
