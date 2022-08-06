<<<<<<< HEAD
import React, { useState, useEffect, useRef } from "react";

const COUNT_DOWN_TIME = 5;
=======
import React, {useState, useEffect, useRef} from 'react'
>>>>>>> 80c85754bdc9f4d5b6229c257ab3d00954ee64c4

function App() {
  const [textBox, setTextBox] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [countDown, setCountDown] = useState(COUNT_DOWN_TIME);
  const [startGame, setStartGame] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [textAreaDisabled, setTextAreaDisabled] = useState(true);
  const textBoxRef = useRef(null);

  function handleChange(e) {
    const { value } = e.target;
    setTextBox(value);
  }

  function handleClick() {
    setTextAreaDisabled(false);
    setStartGame(true);
  }

  function countWords(textBox) {
    const textToArray = textBox.split(" ");

    return textToArray.filter((word) => word !== "").length;
  }

  useEffect(() => {
    setTimeout(() => {
      if (countDown > 0 && startGame) {
        setButtonDisabled(true);
        textBoxRef.current.focus();
        setCountDown((prevCount) => prevCount - 1);
      } else if (countDown === 0) {
        setWordCount(countWords(textBox));
        setTextBox("");
        setButtonDisabled(false);
        setTextAreaDisabled(true);
        setStartGame(false);
        setCountDown(COUNT_DOWN_TIME);
      }
    }, 1000);
  }, [countDown, startGame]);

  return (
<<<<<<< HEAD
    <div>
      <h1>Speedtyping</h1>
      <textarea
        disabled={textAreaDisabled}
        ref={textBoxRef}
        onChange={handleChange}
        value={textBox}
        name="text"
      ></textarea>
      <h2>Count down: {countDown}</h2>
      <button disabled={buttonDisabled} onClick={handleClick}>
        Start
      </button>
      <h4>Word count: {wordCount}</h4>
=======
    <div >
      <h1>Speedtyping</h1>
      <textarea></textarea>
      <h1>Count down: ???</h1>
      <button>Start</button>
      <h4>Word count: ???</h4>
>>>>>>> 80c85754bdc9f4d5b6229c257ab3d00954ee64c4
    </div>

  );
}

export default App;
