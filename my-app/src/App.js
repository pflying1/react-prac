import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import App2 from "./components/App2";
import UserData from "./components/UserData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/app2" element={<App2 />} />
      <Route path="/userdata" element={<UserData />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
