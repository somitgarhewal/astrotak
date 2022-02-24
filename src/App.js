import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import AskQuestion from "./components/askQuestion";
import Profile from "./components/profile";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AskQuestion />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
