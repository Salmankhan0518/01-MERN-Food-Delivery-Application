import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

function Card(props) {
  let dispatch = useDispatchCart();
  const data = useCart();
  const priceRef = useRef();
  const options = props.options;
  const priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = null;
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }

    if (food !== null) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
      }
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };

  let finalPrice = qty * (options[size] ? parseInt(options[size]) : 0);

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div 
        className="card m-3 shadow-lg border-0 bg-dark text-white h-100" 
        style={{ width: "18rem", borderRadius: "15px", overflow: "hidden" }}
      >
        {/* Image Size Adjusted: Height increased for better visibility */}
        <img
          src={props.foodItem.img}
          className="card-img-top"
          alt={props.foodItem.name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title fw-bold text-success mb-2">{props.foodItem.name}</h5>
          </div>
          
          <div className="container w-100 p-0">
            <div className="d-flex align-items-center mb-3">
              {/* Quantity Select */}
              <select
                className="form-select form-select-sm bg-success text-white border-0 me-2"
                style={{ cursor: "pointer", width: "70px" }}
                onChange={(e) => setQty(Number(e.target.value))}
              >
                {Array.from(Array(6), (e, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              {/* Size Select */}
              <select
                className="form-select form-select-sm bg-success text-white border-0 flex-grow-1"
                style={{ cursor: "pointer" }}
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => (
                  <option key={data} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </div>

            <div className="fs-5 fw-bold mb-2">
              Rs: <span className="text-success">{finalPrice}/-</span>
            </div>
          </div>
          
          <hr className="border-secondary my-2" />
          
          <button
            className="btn btn-success w-100 fw-bold shadow-sm py-2"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;