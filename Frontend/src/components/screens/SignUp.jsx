import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      alert("Account Created Successfully!");
      navigate("/login");
    }

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ 
      backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', 
      height: '100vh', 
      backgroundSize: 'cover',
      backgroundPosition: 'center' 
    }}>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="card p-4 shadow-lg border-0 bg-dark text-white" style={{ width: "28rem", borderRadius: "15px", opacity: "0.95" }}>
          <h2 className="text-center mb-4 text-success fw-bold">Create Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">Full Name</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                name="name"
                value={credentials.name}
                onChange={onChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
              <input
                type="email"
                className="form-control bg-dark text-white border-secondary"
                id="exampleInputEmail1"
                name="email"
                value={credentials.email}
                onChange={onChange}
                placeholder="name@example.com"
                required
              />
              <div id="emailHelp" className="form-text text-muted">We'll never share your email.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
              <input
                type="password"
                className="form-control bg-dark text-white border-secondary"
                id="exampleInputPassword1"
                name="password"
                value={credentials.password}
                onChange={onChange}
                placeholder="Minimum 5 characters"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label fw-bold">Address</label>
              <input
                type="text"
                className="form-control bg-dark text-white border-secondary"
                id="address"
                name="geolocation"
                value={credentials.geolocation}
                onChange={onChange}
                placeholder="Your delivery location"
                required
              />
            </div>

            <div className="d-grid gap-2 mt-4">
              <button type="submit" className="btn btn-success fw-bold py-2 shadow-sm">
                Register Now
              </button>
              <Link to="/login" className="btn btn-outline-danger fw-bold py-2 mt-2">
                Already a user? Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}