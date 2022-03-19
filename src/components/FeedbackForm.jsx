import React, { useState } from "react";
import Card from "./shared/Card";
const FeedbackForm = () => {
  const [text, setText] = useState();
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
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
