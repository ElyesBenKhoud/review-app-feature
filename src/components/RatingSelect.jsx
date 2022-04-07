import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const { feedbackEdit } = useContext(FeedbackContext);
  const [selected, setSelected] = useState(5);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          name="rating"
          id="num1"
          value="1"
          onChange={handleChange}
          checked={selected === 1}
        />
        <label htmlFor="num1">1</label>
      </li>{" "}
      <li>
        <input
          type="radio"
          name="rating"
          id="num2"
          value="2"
          onChange={handleChange}
          checked={selected === 2}
        />
        <label htmlFor="num1">2</label>
      </li>{" "}
      <li>
        <input
          type="radio"
          name="rating"
          id="num3"
          value="3"
          onChange={handleChange}
          checked={selected === 3}
        />
        <label htmlFor="num1">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num4"
          value="4"
          onChange={handleChange}
          checked={selected === 4}
        />
        <label htmlFor="num1">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          onChange={handleChange}
          checked={selected === 5}
        />
        <label htmlFor="num1">5</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
