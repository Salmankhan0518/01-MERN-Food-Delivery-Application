import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Card"
import Carousel from "../Carousel";

function Home() {
  return (
    <div>
      <div> <Navbar /> </div>
      <div> <Carousel /> </div>
      <div> <Card /> </div>
      <div> <Footer /> </div>
    </div>
  );
}

export default Home;
