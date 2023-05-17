import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Book from "./Book";
import Nav from "./components/nav";
import Contact from "./components/contact";
import PageNotFound from "./components/404"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function App() {
  return (
    <BrowserRouter>
      <Contact />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book" element={<Book />}></Route>
        <Route path="/book/search/:search" element={<Book />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes> 
    </BrowserRouter>
  );
}