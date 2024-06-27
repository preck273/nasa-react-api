import React from 'react';

export default function Footer(props) { //pass props

    //destructure handleToggle function out of props
    const {showSidbar, handleToggle, data} = props
  return (
    <footer>
        <div className="bgGradient"></div>
        <div>
            
            <h1>The Apod Project</h1>
            <h3>{data?.title}</h3>
        </div>

        <button onClick = {handleToggle}>
            <i className="fa-solid fa-circle-info"></i>
        </button>

    </footer>

     
    
  );
}
