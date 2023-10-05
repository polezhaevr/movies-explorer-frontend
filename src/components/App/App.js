import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { CurrentUser } from "../../contexts/CurrentUserContext";

import Main from "../Main/Main.js";


function App() {
  return (
<CurrentUser.Provider value={CurrentUser}>
    <div className="App">
      <Main/>
    </div>
</CurrentUser.Provider>
  );
}

export default App;