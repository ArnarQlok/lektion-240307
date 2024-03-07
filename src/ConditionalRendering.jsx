import { useState } from "react";

const ConditionalRendering = (props) => {
  const welcomeMessage = <h2>Welcome {props.username}</h2>;
  const loginPrompt = <h2>Please log in to continue</h2>;

  return (
    <>
      {props.isLoggedIn && props.username === "Arnar"
        ? welcomeMessage
        : loginPrompt}

      <button onClick={() => props.setIsLoggedIn(!props.isLoggedIn)}>
        Login
      </button>
    </>
  );
};

export default ConditionalRendering;
