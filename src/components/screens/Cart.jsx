import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart, useDispatchCart } from "../ContextReducer";

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className="container m-auto mt-5 p-5">
        <div className="card bg-dark text-white p-5 shadow-lg border-0 text-center">
          <div className="fs-1 mb-3">🛒</div>
          <div className="w-100 text-center fs-3 fw-bold text-success">
            The Cart is Empty!
          </div>
          <p className="text-muted mt-2">Add some delicious food to your cart and come back.</p>
        </div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    console.log("Checking Email before fetch:", userEmail);
    
    if (!userEmail) {
      alert("Please login first to checkout!");
      return;
    }

    let response = await fetch("http://localhost:5000/api/orderData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: data,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });

    if (response.ok) {
      dispatch({ type: "DROP" });
      alert("Order Placed Successfully!");
    } else {
      alert("Error placing order. Check console.");
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive shadow-lg p-4 bg-dark rounded">
        <h2 className="text-success fw-bold mb-4">Your Shopping Cart</h2>
        <table className="table table-dark table-hover align-middle">
          <thead className="text-success fs-5 border-bottom border-success">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {data.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td className="fw-bold">{food.name}</td>
                <td><span className="badge bg-success">{food.qty}</span></td>
                <td>{food.size}</td>
                <td>{food.price}/-</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-danger btn-sm border-0"
                    onClick={() => {
                      dispatch({ type: "REMOVE", index: index });
                    }}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <hr className="text-success" />
        
        <div className="d-flex justify-content-between align-items-center mt-4">
          <h1 className="fs-2 text-white fw-bold">
            Total Price: <span className="text-success">{totalPrice}/-</span>
          </h1>
          <button 
            className="btn btn-success btn-lg px-5 fw-bold shadow" 
            onClick={handleCheckOut}
          >
            Check Out Now
          </button>
        </div>
      </div>
    </div>
  );
}