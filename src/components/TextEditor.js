// src/components/TextEditor.js
import React, { useState, useRef } from "react";
import "./TextEditor.css";

const TextEditor = () => {
  const [text, setText] = useState("");
  const [lineToJump, setLineToJump] = useState("");
  const lineRefs = useRef([]);

  const lines = text.split("\n");

  const handleJump = () => {
    const lineNumber = parseInt(lineToJump, 10) - 1;
    if (lineRefs.current[lineNumber]) {
      lineRefs.current[lineNumber].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="editor-container">
      <div className="editor">
        <div className="line-numbers">
          {lines.map((_, i) => (
            <div key={i} ref={(el) => (lineRefs.current[i] = el)}>
              {i + 1}
            </div>
          ))}
        </div>
        <textarea
          className="text-box"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing here..."
        />
      </div>

      <div className="jump-section">
        <input
          type="number"
          value={lineToJump}
          onChange={(e) => setLineToJump(e.target.value)}
          placeholder="Line number"
        />
        <button onClick={handleJump}>Jump</button>
      </div>
    </div>
  );
};

export default TextEditor;
