
import Embed from  "./pages/embed"; 
import Login from "./pages/Login";
import Register from "./pages/register";
import Song from "./pages/addsongs";
import Aboutus from "./pages/aboutus";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artist from "./pages/addartist";
import React,{useState} from "react";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/home" exact element={<Embed/>} />
      <Route path="/register" exact element={<Register/>} />
      <Route path="/addsongs" exact element={<Song/>} />
      <Route path="/addartist" exact element={<Artist/>} />
      <Route path="/aboutus" exact element={<Aboutus/>} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
