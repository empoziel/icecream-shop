import axios from "axios";
import React, { useEffect, useState } from "react";

const Toppings = () => {
  const [toppingData, setToppingData] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/toppings")
      .then((res) => setToppingData(res.data));
  }, []);

  const handleChange = (e, item) => {
    e.target.checked
      ? setBasket([...basket, item])
      : setBasket(basket.filter((i) => i.name !== item.name));
  };

  return (
    <div className="container">
      <h1>Topping Varietes </h1>
      <p>
        <span className="text-success">1 $</span> Each
      </p>
      <h3>
        Topping Price:{" "}
        <span className="text-success"> {basket.length * 1} $ </span>
      </h3>

      <div className="row gap-3 mt-4  ">
        {toppingData.map((data) => (
          <div
            key={data.name}
            className=" top-card d-flex flex-column align-items-center py-3 rounded-5 "
            style={{ width: "150px" }}
          >
            <label
              className="d-flex flex-column align-items-center gap-3"
              htmlFor={data.name}
            >
              <img height={100} src={data.imagePath} alt="topping-img" />
              <p className="text-center text-nowrap">{data.name}</p>
            </label>
            <input
              onChange={(e) => handleChange(e, data)}
              id={data.name}
              className="form-chec-input"
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
