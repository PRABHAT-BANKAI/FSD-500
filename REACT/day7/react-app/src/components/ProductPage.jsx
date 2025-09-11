import React, { useState } from "react";
import logo from "../../public/vite.svg";

const ProductPage = () => {
  const [data, setData] = useState([]);

  function handleData() {
    setData([
      {
        title: "adidas",
        price: 123,
        image:
          "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features4.jpg",
      },
      { title: "nike", price: 456, image: logo },
      {
        title: "puma",
        price: 897,
        image:
          "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features4.jpg",
      },
      {
        title: "reebok",
        price: 678,
        image:
          "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features4.jpg",
      },
      {
        title: "jorden",
        price: 111,
        image:
          "https://mobirise.com/extensions/cryptom5/trade-agency/assets/images/features4.jpg",
      },
    ]);
  }
  return (
    <div>
      <h1>product page</h1>
      <button onClick={handleData}>fetch data</button>
      <div style={{ display: "flex", gap: "10px" }}>
        {data.map((element) => {
          return (
            <div style={{ border: "1px solid black", width: "200px" }}>
              <p>title: {element.title}</p>
              <p>Price: {element.price}</p>
              <img width={"100px"} src={element.image} alt="game" />
              <button>BUY</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
