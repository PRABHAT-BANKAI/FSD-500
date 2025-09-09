import React from 'react'

const Navbar = () => {
  return (
    <nav style={{height:"70px",backgroundColor:"aqua",display:"flex",justifyContent:'space-between',alignItems:"center",padding:"0  10%"}}>
      <h1>Logo</h1>
      <ul style={{display:"flex",listStyle:"none",gap:"15px"}}>
        <li>home</li>
        <li>about</li>
        <li>contact</li>
        <li>Features</li>
      </ul>
    </nav>
  )
}

export default Navbar