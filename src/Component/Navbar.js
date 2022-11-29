import React, { useState,useEffect } from 'react';
import {Link, useLocation} from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder"

function Navbar() {
    const [toggle,setToggle]=useState(false);
    const location= useLocation();

    useEffect(()=>{
        setToggle(false);
    },[location]);

  return (
    <div className="navbar" id={toggle?"open":"close"}>
        <div className="toggleButton">
            <button 
            onClick={()=>{
                setToggle((tog)=>!tog);
            }
            }>
                <ReorderIcon/>
                </button>
        </div>
        <div className="links">
            <Link to="/portfolio">Home</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar