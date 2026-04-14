import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
    }

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="card p-4 shadow-lg border-0 bg-dark text-white" style={{ width: "25rem", borderRadius: "15px" }}>
          <h2 className="text-center mb-4 text-success">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                Email address
              </label>
              <input
                type="email"
                className="form-control bg-dark text-white border-secondary"
                id="exampleInputEmail1"
                name="email"
                value={credentials.email}
                onChange={onChange}
                placeholder="Enter your email"
              />
              <div id="emailHelp" className="form-text text-muted">
                We'll never share your email.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label fw-bold">
                Password
              </label>
              <input
                type="password"
                className="form-control bg-dark text-white border-secondary"
                id="exampleInputPassword1"
                name="password"
                value={credentials.password}
                onChange={onChange}
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-4">
              <button type="submit" className="btn btn-success fw-bold py-2">
                Submit
              </button>
              <Link to="/createuser" className="btn btn-outline-danger fw-bold py-2 mt-2">
                I'm a new user
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;