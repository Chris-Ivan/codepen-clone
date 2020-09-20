import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Editor from "./Editor";

function App() {
  const [html, setHtml] = useLocalStorage(
    "html",
    `<!--This is a sample-->
<div class="center">
  <h1>Hello, world!</h1>
  <p>Have fun!</p>
</div>
    `
  );
  const [css, setCss] = useLocalStorage(
    "css",
    `/* Hi, there! */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Calibri;
  font-size: 1.25rem;
  color: gray;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background:  hsl(255, 6%, 15%);
}
  `
  );
  const [js, setJs] = useLocalStorage("js", `// github.com/Chris-Ivan`);
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`<html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default App;
