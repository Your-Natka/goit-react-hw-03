import { useState } from "react";
import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  console.log(inputValue);

  return (
    <div>
      <label className={css.label}>Find contacts by name </label>
      <input
        placeholder="Search by name"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>{inputValue}</p>
    </div>
  );
};