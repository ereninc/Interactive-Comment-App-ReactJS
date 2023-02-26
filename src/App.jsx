import React from "react";

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";

import Conversations from "./components/conversations/index.jsx";

function App() {
  return (
    <div className="container">
      <p>Container</p>
      <Conversations />
    </div>
  );
}

export default App;
