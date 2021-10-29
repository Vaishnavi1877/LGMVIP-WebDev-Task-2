import React from 'react';

export default function Navbar(props) {

    return (
        <div className="navbar">
           <div className="brand">
           <h1>Let's Grow More</h1>
           </div>
             <button onClick={()=>{ props.handleClick(true);}} className="btn"><h3>Get Users</h3></button>
                     
        </div>
    )
}