import React from "react";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade shadow-lg"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          {/* Search Bar Overlay */}
          <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10", bottom: "20%" }}>
            <form className="d-flex justify-content-center">
              <input
                className="form-control me-2 w-75 py-2 shadow-lg border-0"
                type="search"
                placeholder="Search for your favorite food..."
                aria-label="Search"
              />
              <button className="btn btn-success fw-bold px-4 shadow-sm" type="submit">
                Search
              </button>
            </form>
          </div>

          {/* Carousel Images */}
          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              className="d-block w-100"
              alt="burger"
              style={{ height: "500px", objectFit: "cover", filter: "brightness(40%)" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
              className="d-block w-100"
              alt="biryani"
              style={{ height: "500px", objectFit: "cover", filter: "brightness(40%)" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              className="d-block w-100"
              alt="zinger"
              style={{ height: "500px", objectFit: "cover", filter: "brightness(40%)" }}
            />
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;