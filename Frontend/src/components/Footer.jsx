import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-dark text-white border-top border-success mt-5 shadow-lg">
      <div className="container py-4">
        <div className="row align-items-center">
          
          {/* Brand and Tagline */}
          <div className="col-12 col-md-4 text-center text-md-start mb-3 mb-md-0">
            <Link to="/" className="text-success text-decoration-none fs-2 fw-bold fst-italic">
              GoFood
            </Link>
            <p className="text-light small mb-0 opacity-75">The taste you trust, delivered fast.</p>
          </div>

          {/* Center: Main Navigation Links */}
          <div className="col-12 col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex justify-content-center gap-3">
              <Link to="/" className="text-white text-decoration-none small hover-link fw-semibold">Home</Link>
              <span className="text-success">|</span>
              <Link to="/login" className="text-white text-decoration-none small hover-link fw-semibold">Login</Link>
              <span className="text-success">|</span>
              <Link to="/myOrder" className="text-white text-decoration-none small hover-link fw-semibold">My Orders</Link>
            </div>
          </div>

          {/* Right: Social Media Icons */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="btn btn-outline-success btn-sm rounded-circle shadow-sm text-white border-white">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-outline-success btn-sm rounded-circle shadow-sm text-white border-white">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-success btn-sm rounded-circle shadow-sm text-white border-white">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>

        </div>

        {/* --- FIXED BOTTOM LINE SECTION --- */}
        <div className="row mt-4 pt-3 border-top border-secondary">
          <div className="col-12 text-center">
            {/* Yahan text-muted ko text-white aur opacity-50 se replace kiya hai */}
            <p className="text-white opacity-50 small mb-0">
              © 2026 <span className="text-success fw-bold">GoFood</span>. All Rights Reserved. 
              <span className="mx-2 text-success">|</span> 
              Designed for Quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;