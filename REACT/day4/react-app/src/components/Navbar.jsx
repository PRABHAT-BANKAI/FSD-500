import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "aqua",
        height: "70px",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 10%",
      }}
    >
      <h1>Logo</h1>

      <ul style={{ listStyle: "none", display: "flex", gap: "10px" }}>
        <li>About</li>
        <li>Home</li>
        <li>contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
