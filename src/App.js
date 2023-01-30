import logo from "./logo.svg";
import Editor from "./Editor.js";
import Previewer from "./Previewer.js";
import React, { useState } from "react";
import "./App.css";
import "@picocss/pico";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";
function App() {
  const [text, setText] = useState("");
  //Get text from Editor and set it as text
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="grid">
        <div className="container-fluid">
          <Editor handleChange={handleChange} text={text} />
        </div>
        {/* Create previewer component and pass text props into it */}
        <div className="container-fluid">
          <Previewer text={text} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
