import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import AskQuestion from "./components/askQuestion";

function App() {
  return (
    <Routes>
      <Route path='/' element={<AskQuestion />} />
    </Routes>
  );
}

export default App;
