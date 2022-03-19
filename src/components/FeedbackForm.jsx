import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
const FeedbackForm = () => {
  const [text, setText] = useState("");
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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
