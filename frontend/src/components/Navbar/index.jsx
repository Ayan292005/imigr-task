import React from 'react'
import { NavLink } from "react-router-dom"
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { IconButton } from '@mui/material';


function Navbar() {
  return (
    <>
      <div className='nav-bar'>
        <p>We believe we helps people <br />
          for happier lives</p>
        <img src="https://preview.colorlib.com/theme/immigration/img/logo.png.webp" alt="" />
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <p>+880 123 12 658 439</p>
 <i class="fa-solid fa-phone" style={{backgroundColor:'#f6214b',color:"white",padding:"30px",fontSize:"20px",marginLeft:"10px"}}></i>
        </div>
      </div>
      <div className="navlinks cntr">
      <NavLink to="/" style={{textDecoration:"none",fontSize:"20px",color:"black"}}>Home</NavLink>
      <NavLink to="/immigration" style={{textDecoration:"none",fontSize:"20px",color:"black"}}>immigration</NavLink>
      </div>

    </>
  )
}

export default Navbar