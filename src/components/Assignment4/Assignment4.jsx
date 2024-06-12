import React from "react";
import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./Assignment4.css";
function Assignment4() {
  const [Count, setCount] = useState();
  const [Para, setPara] = useState("");
  const handleSubmit = () => {
    const words = faker.lorem.words(Count);
    setPara(words);
  };
  return (
    <div>
      <div className="Title">Paragraph Generator</div>
      <div className="body">
        <input
          type="text"
          value={Count}
          placeholder="enter Count of words"
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="Paragraph-body">{Para}</div>
    </div>
  );
}

export default Assignment4;
