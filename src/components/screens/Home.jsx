import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Card";

function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodItem(response[0] || []);
    setFoodCat(response[1] || []);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="bg-light" style={{ minHeight: "100vh" }}>
      <Navbar />

      {/* Carousel Section - Fixed Padding and Margins */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade shadow-sm"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div
            className="carousel-caption d-none d-md-block"
            style={{ zIndex: "10", bottom: "20%" }}
          >
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2 w-75 py-2 shadow-lg border-0"
                type="search"
                placeholder="What would you like to eat today?"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              className="d-block w-100"
              style={{
                height: "600px",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
              className="d-block w-100"
              style={{
                height: "600px",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              className="d-block w-100"
              style={{
                height: "600px",
                objectFit: "cover",
                filter: "brightness(40%)",
              }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Food Items Section */}
      <div className="container-fluid px-4 py-4">
        {foodCat.length > 0 ? (
          foodCat.map((data) => (
            <div key={data._id} className="mb-5">
              <div className="fs-3 fw-bold text-success mb-3 ms-2">
                {data.CategoryName}
              </div>
              <hr className="mb-4 text-success" />
              <div className="row g-4 justify-content-start">
                {foodItem.length > 0 ? (
                  foodItem
                    .filter(
                      (item) =>
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase()),
                    )
                    .map((filterItem) => (
                      <div
                        key={filterItem._id}
                        className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center"
                      >
                        <Card
                          foodItem={filterItem}
                          options={filterItem.options[0]}
                        />
                      </div>
                    ))
                ) : (
                  <div className="text-center w-100 text-muted py-5">
                    No Data Found
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5">
            <div className="spinner-border text-success" role="status"></div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
