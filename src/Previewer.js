import React from "react";
import { marked } from "marked";
import "./Previewer.css";

const Previewer = ({ text }) => {
  var parsedText = marked(text, { breaks: true });
  return (
    <div className="Previewer">
      <article>
        <header className="previewer-header">
          <strong className="editor-title">Preview</strong>
        </header>
        <body
          id="preview"
          className="previewer__text"
          dangerouslySetInnerHTML={{ __html: parsedText }}
        ></body>
      </article>
    </div>
  );
};
export default Previewer;
