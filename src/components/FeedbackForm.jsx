import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 characters !");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2> How would you rate our services ?</h2>
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
