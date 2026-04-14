import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "./screens/Cart";
import { useCart } from "./ContextReducer";

function Navbar() {
  const [cartView, setCartView] = useState(false);
  let data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky sticky-top shadow-sm" 
           style={{ zIndex: "10", boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic fw-bold" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5 mx-2 fw-semibold" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link className="nav-link active fs-5 mx-2 fw-semibold" aria-current="page" to="/myOrder">
                    My Orders
                  </Link>
                </li>
              ) : ""}
            </ul>

            {(!localStorage.getItem("authToken")) ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1 fw-bold shadow-sm" to="/login">
                  Login
                </Link>
                <Link className="btn bg-white text-success mx-1 fw-bold shadow-sm" to="/createuser">
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="d-flex align-items-center">
                <div 
                  className="btn bg-white text-success mx-2 fw-bold shadow-sm position-relative" 
                  onClick={() => { setCartView(true) }}
                >
                  My Cart {" "}
                  <Badge pill bg="danger" className="ms-1">
                    {data.length}
                  </Badge>
                </div>

                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : null}

                <button 
                  className="btn bg-white text-danger mx-2 fw-bold shadow-sm" 
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;