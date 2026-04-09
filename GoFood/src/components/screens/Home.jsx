import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Card"
import Carousel from "../Carousel";

function Home() {

  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", 
      {
        method: "POST",
        headers: {
          'Content-Type' : 'application/json'
        }
      }
    )

  response = await response.json();
  setFoodItem(response[0]);
  setFoodCat(response[1]);

  // console.log(response[0], response[1])
    
  }

  useEffect(() => {
    loadData()
  },[])


  return (
    <div>
      <div> <Navbar /> </div>
      <div> <Carousel /> </div>

      <div className="m-3"> 
        <Card /> 
      </div>
 
      <div> <Footer /> </div>
    </div>
  );
}

export default Home;
