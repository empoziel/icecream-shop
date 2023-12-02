import React from "react";

const Card = ({ data, basket, setBasket }) => {
  //how many products in the basket
  const found = basket.filter((i) => i.name === data.name);
  const amount = found.length;

  //delete one type in the basket
  const handleReset = () => {
    setBasket(basket.filter((i) => i.name !== data.name));
  };

  return (
    <div
      className="d-flex flex-column align-items-center gap border p-3"
      style={{ width: "190px" }}
    >
      <img height={100} src={data.imagePath} alt="variety-img" />
      <span className="fs-5">{data.name}</span>

      <div className="d-flex mt-4 gap-2 align-items-center ">
        <button onClick={handleReset} className="btn btn-sm btn-outline-danger">
          Reset
        </button>
        <span className="fs-2">{amount}</span>
        <button
          onClick={() => setBasket([...basket, data])}
          className="btn btn-sm btn-outline-success"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Card;
