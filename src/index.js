import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const Final = () => {
  const xmlRef = useRef(null);
  return (
    <>
      <App ref={xmlRef} />
      <button
        onClick={async () => {
          const xml = await xmlRef.current.getXml();
          console.log({ xml });
        }}
      >
        get xml
      </button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Final />
  </React.StrictMode>
);
