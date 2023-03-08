import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Test from "./pages/Test";
import User from "./pages/User";

export const themeContext = React.createContext();

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}

export default App;
