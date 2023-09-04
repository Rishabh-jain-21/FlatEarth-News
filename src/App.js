import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* key is provied to react component to differnetite between these routes */}
            <Route exact path="/" element={<News key="india" category="india" />}></Route>
            <Route exact path="/india" element={<News key="india" category="india" />}></Route>
            <Route exact path="/world" element={<News key="world/asia" category="world/asia" />}></Route>
            <Route exact path="/education" element={<News key="education" category="education" />}></Route>
            <Route path="*" element={<Error />}></Route>
            <Route exact path="/FlatEarth-News" element={<News key="world/asia" category="world/asia" />}></Route>
          </Routes>
        </BrowserRouter>
      </>);
  }
};
