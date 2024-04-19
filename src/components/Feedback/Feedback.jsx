import "./styles.css";
import Button from "../Button/Button";
import { useState } from "react";

function Feedback() {
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(10);

  const onLike = () => {
    setCountLike((prevValue) => prevValue + 1);
  };

  const onDislike = () => {
    if (countDislike > 0) {
      setCountDislike((prevValue) => prevValue - 1);
    }
  };

  const resetResult = () => {
    setCountLike(0);
    setCountDislike(0);
  };

  return (
    <div className="feedback-container">
      <div className="feedback-components">
        <p>{countLike}</p>
        <Button name="Like" onButtonClick={onLike} />
        
      </div>
      <div className="feedback-components">
        <p>{countDislike}</p>
        <Button name="Dislike" onButtonClick={onDislike} />
        
      </div>
      <div className="feedback-components">
        <Button name="Reset Results" onButtonClick={resetResult} />
      </div>
    </div>
  );
}

export default Feedback;
