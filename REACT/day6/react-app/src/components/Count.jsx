import React from "react";

const Count = ({number,userName}) => {
  return (
    <div>
      <p>count:{number}</p>
      <p>Username: {userName}</p>
    </div>
  );
};

export default Count;
