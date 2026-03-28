import React from "react";

function Carousel() {
  return (
    <div className="container mt-3">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
              className="d-block w-100"
              alt="burger"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1604908176997-431f4f90b7a3"
              className="d-block w-100"
              alt="biryani"
              style={{ height: "400px", objectFit: "cover" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
              className="d-block w-100"
              alt="zinger"
              style={{ height: "400px", objectFit: "cover" }}
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
  );
}

export default Carousel;