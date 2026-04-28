import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function MyOrder() {
  const [orderData, setorderData] = useState(null); // Initial state null rakhein

  const fetchMyOrder = async () => {
    const userEmail = localStorage.getItem("userEmail");
    console.log(userEmail);

    try {
      let response = await fetch("http://localhost:5000/api/auth/myOrderData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      });
      let res = await response.json();
      setorderData(res.orderData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          {/* Check if data exists and has order_data */}
          {orderData && orderData?.order_data?.length > 0 ? (
            orderData.order_data
              .slice(0)
              .reverse()
              .map((item, index) => {
                return item.map((arrayData, idx) => {
                  return (
                    <div key={`${index}-${idx}`}>
                      {arrayData.Order_date ? (
                        <div className="m-auto mt-5">
                          <strong>Date: {arrayData.Order_date}</strong>
                          <hr />
                        </div>
                      ) : (
                        <div className="col-12 col-md-6 col-lg-3">
                          <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                            <img
                              src={arrayData.img}
                              className="card-img-top"
                              alt={arrayData.name}
                              style={{ height: "120px", objectFit: "fill" }}
                            />
                            <div className="card-body">
                              <h5 className="card-title">{arrayData.name}</h5>
                              <div className="container w-100 p-0" style={{ height: "38px" }}>
                                <span className="m-1">{arrayData.qty}</span>
                                <span className="m-1">{arrayData.size}</span>
                                <div className="d-inline ms-2 h-100 w-20 fs-5">
                                  ₹{arrayData.price}/-
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                });
              })
          ) : (
            <div className="text-center mt-5">No orders found.</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}