import React, { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);
  const [selected, setSelected] = useState(10);
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
          checked={selected === 1}
          onChange={handleChange}
        />
        <label htmlFor="num1">1</label>
      </li>{" "}
      <li>
        <input
          type="radio"
          name="rating"
          id="num2"
          value="2"
          checked={selected === 2}
          onChange={handleChange}
        />
        <label htmlFor="num1">2</label>
      </li>{" "}
      <li>
        <input
          type="radio"
          name="rating"
          id="num3"
          value="3"
          checked={selected === 3}
          onChange={handleChange}
        />
        <label htmlFor="num1">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num4"
          value="4"
          checked={selected === 4}
          onChange={handleChange}
        />
        <label htmlFor="num1">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          checked={selected === 5}
          onChange={handleChange}
        />
        <label htmlFor="num1">5</label>
      </li>
    </ul>
  );
};

export default RatingSelect;
