import React from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentUser } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main.js";
import Movies from "../Movies/Movies.js";
import Profile from "../Profile/Profile.js";
import Register from "../Register/Register.js";
import NotFound from "../NotFound/NotFound.js";
import SavedMovies from "../SavedMovies/SavedMovies.js";
import Login from "../Login/Login.js";

function App() {
  return (
    <CurrentUser.Provider value={CurrentUser}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={< Login />} />
          <Route path="/profile" element={< Profile />} />
          <Route path="/*" element={< NotFound />} />
        </Routes>
      </div>
    </CurrentUser.Provider>
  );
}

export default App;