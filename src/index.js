import React, { useState } from "react";
import ReactDOM from "react-dom";
import "_styles/index.css";
import { HomePage, AboutPage } from "_pages";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function App() {
  const [link, setLink] = useState(0);
  return (
    <div>
      {link === 0 ? (
        <HomePage setLink={setLink}></HomePage>
      ) : (
        <AboutPage setLink={setLink}></AboutPage>
      )}
    </div>
  );
}
