import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2> our rating goes here</h2>
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="enter your feedback"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message} </div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
