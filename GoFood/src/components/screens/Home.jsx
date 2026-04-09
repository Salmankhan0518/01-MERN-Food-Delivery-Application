import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Card from "../Card";

function Home() {
  const [search, setSearch] = useState('');
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

    console.log(response);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        {" "}
        <Navbar />{" "}
      </div>
      <div>
        <div
          className="container-fluid mt-3"
          style={{ objectFit: "contain !important" }}
        >
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-caption" style={{ zIndex: "10" }}>
                <div className="d-flex justify-content-center">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value)
                    }}
                  />
                  {/* <button
                    className="btn btn-outline-success text-white bg-success"
                    type="submit"
                  >
                    Search
                  </button> */}
                </div>
              </div>

              <div className="carousel-item active">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
                  className="d-block w-100"
                  alt="burger"
                  style={{
                    height: "100vh",
                    objectFit: "cover",
                    filter: "brightness(30%",
                  }}
                />
              </div>

              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
                  className="d-block w-100"
                  alt="biryani"
                  style={{
                    height: "100vh",
                    objectFit: "cover",
                    filter: "brightness(30%",
                  }}
                />
              </div>

              <div className="carousel-item">
                <img
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                  className="d-block w-100"
                  alt="zinger"
                  style={{
                    height: "100vh",
                    objectFit: "cover",
                    filter: "brightness(30%",
                  }}
                />
              </div>
            </div>

            {/* Previous Button */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>

            {/* Next Button */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        {foodCat && foodCat.length > 0 ? (
          foodCat.map((data) => {
            return (
              <div className="row mb-3 ">
                <div key={data._id} className="fs-3 m-3">
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem && foodItem.length > 0 ? (
                  foodItem
                    .filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))
                    .map((filterItem) => {
                      return (
                        <div
                          key={filterItem._id}
                          className="col-12 col-md-6 col-lg-3"
                        >
                          <Card
                            foodname={filterItem.name}
                            options={filterItem.options[0]}
                            imgSrc={filterItem.img}
                          />
                        </div>
                      );
                    })
                ) : (
                  <div> No Such Data Found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>"""""</div>
        )}
      </div>

      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}

export default Home;
