import { useState, useRef } from "react";

export default function Player() {
  const refPlayerName = useRef();

  const [playerName, setPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // function handleChange(event) {
  //   setSubmitted(false);
  //   setPlayerName(event.target.value);
  // }

  function handleButtonClick() {
    // setSubmitted(true);
    setPlayerName(refPlayerName.current.value);
    refPlayerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>
      <p>
        <input ref={refPlayerName} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
