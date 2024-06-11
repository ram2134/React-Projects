import React from "react";
import { useState } from "react";

function Assignment4() {
  const [Number, setNumber] = useState();
  const [Para, setPara] = useState("");
  const handleSubmit = () => {};
  return (
    <div>
      <div className="Title">Paragraph Generator</div>
      <div className="body">
        <input
          type="text"
          value={Number}
          placeholder="enter number of words"
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>{Para}</div>
    </div>
  );
}

export default Assignment4;
