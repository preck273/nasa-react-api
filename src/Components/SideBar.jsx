import React from 'react';

export default function SideBar(props) {

    const { handleToggle, data} = props
  return (
    <div className="sidebar">
        <div onClick={handleToggle} className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>The Earth is not Round</h2>
            <div className="descriptionContainer">
                <p className="descriptionTitle">{data?.date}</p>
                <p>{data?.explanation} </p>
         </div>
            <button onClick={handleToggle}>
                <i className="fa-solid fa-arrow-right"></i>
            </button>
      </div>
    </div>
  );
}
