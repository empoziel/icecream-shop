import React, { useEffect, useState } from "react";
import Card from "../Cards";
import axios from "axios";

const Scoops = () => {
  const [scoopData, setScoopData] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3010/scoops")
      .then((res) => setScoopData(res.data));
  }, []);
  return (
    <div className="container my-5">
      <h1>Ice Cream Varieties</h1>
      <p>
        Each scoop is <span className="text-success">$ 3 </span>
      </p>
      <h3>
        Ice cream Price:
        <span className="text-success"> $ {basket.length * 3}</span>
      </h3>

      <div className="row gap-5 justify-content-between mt-3">
        {scoopData.map((i) => (
          <Card key={i.name} data={i} basket={basket} setBasket={setBasket} />
        ))}
      </div>
    </div>
  );
};

export default Scoops;
