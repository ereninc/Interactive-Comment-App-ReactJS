import React from "react";

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";

import Conversations from "./components/conversations/index.jsx";
import "./App.css";

function App() {
  return (
    <div className="container">
      <p className="conversations">Conversations</p>
      <Conversations />
    </div>
  );
}

export default App;
