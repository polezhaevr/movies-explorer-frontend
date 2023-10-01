import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import { CurrentUser } from "../../contexts/CurrentUserContext";



function App() {
  return (
<CurrentUser.Provider value={CurrentUser}>
    <div className="App">

    </div>
</CurrentUser.Provider>
  );
}

export default App;