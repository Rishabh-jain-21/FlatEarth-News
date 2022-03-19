import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News"
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      category: "india",
    };
  }
  changeFeed = () => {
    if (this.state.category === "india") {
      this.setState({ category: "world" });
      console.log("world");
    }
    else {
      this.setState({ category: "india" });
    }
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* key is provied to react component to differnetite between these routes */}
            <Route exact path="/" element={<News key="world" category="world" />}></Route>
            <Route exact path="/india" element={<News key="india" category="india" />}></Route>
            <Route exact path="/world" element={<News key="world" category="world" />}></Route>
            <Route exact path="/business" element={<News key="business" category="business" />}></Route>
          </Routes>
        </BrowserRouter>
      </>);
  }
};
