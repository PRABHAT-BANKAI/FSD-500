import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);

  async function getFetch() {
    let response = await fetch("https://fakestoreapi.com/products");
    response = await response.json();
    console.log(response);
    setData(response);
  }
  useEffect(() => {
    getFetch();

    return () => {
      console.log("cleanup function ");
    };
  }, [count]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product page</h1>
      <p style={{ textAlign: "center" }}>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" ,gap:"20px"}}
      >
        {/* conditional rendering */}
        {data &&
          data.map((element) => {
            return (
              <div
                key={element.id}
                style={{ border: "1px solid black", width: "200px" }}
              >
                <img height={"100px"} src={element.image} alt="" />
                <p>{element.title}</p>
                <button>Buy now</button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
