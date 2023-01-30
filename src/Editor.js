import React, { useState } from "react";
import "./Editor.css";
import "@picocss/pico";

const Editor = ({ handleChange, text }) => {
  return (
    <div className="Editor">
      <article>
        <header className="editor-header">
          <strong className="editor-title">Editor</strong>
        </header>
        <body>
          <textarea
            placeholder="Enter your markdown here..."
            id="editor"
            className="editor__text"
            onChange={handleChange}
            value={text}
            rows="10"
          ></textarea>
        </body>
      </article>
    </div>
  );
};

export default Editor;
