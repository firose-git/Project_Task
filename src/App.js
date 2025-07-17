import React from "react";
import TextEditor from "./components/TextEditor";

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        📝 Text Editor with Line Numbers and Jump
      </h2>
      <TextEditor />
    </div>
  );
}

export default App;
