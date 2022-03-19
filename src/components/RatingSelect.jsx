import React, { useState } from "react";

const RatingSelect = () => {
  const [selected, setSelected] = useState(10);
  const handleChange = () => {};
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
      </li>
    </ul>
  );
};

export default RatingSelect;
