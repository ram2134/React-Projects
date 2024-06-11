import React, { useState } from "react";
import "./Assignment2.css"; // Import the CSS file

function Assignment2() {
  const [Color, setColor] = useState("black");

  return (
    <>
      <div className="Body" style={{ backgroundColor: Color }}>
        <div className="Body-footer">
          <ul>
            <li>
              <button className="yellow" onClick={() => setColor("yellow")}>
                yellow
              </button>
            </li>
            <li>
              <button className="red" onClick={() => setColor("red")}>
                red
              </button>
            </li>
            <li>
              <button className="blue" onClick={() => setColor("blue")}>
                blue
              </button>
            </li>
            <li>
              <button className="purple" onClick={() => setColor("purple")}>
                purple
              </button>
            </li>
            <li>
              <button className="violet" onClick={() => setColor("violet")}>
                violet
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Assignment2;
