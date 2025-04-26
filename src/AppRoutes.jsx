import React from "react";
import {Routes, Route } from 'react-router-dom';
import Home from  './Components/Home';
import Create from  './Components/Create';
import PostPage from "./Components/PostPage";

const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/post/:title" element={<PostPage />} />
      </Routes>
    );
  };
  
  export default AppRoutes;