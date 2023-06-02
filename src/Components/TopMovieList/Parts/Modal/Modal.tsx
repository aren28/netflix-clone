import React,{useState} from 'react';
import "../Scss/Modal.scss";
import { ReactNetflixPlayer } from "react-netflix-player"

function Modal({movie,handleModal}) {
  return (
    <div>
      <h2>Modal Example</h2>
        <div id="mySizeChartModal" className="ebcf_modal">
            <div className="ebcf_modal-content">
                <span className="ebcf_close" onClick={handleModal}>&times;</span>
                <ReactNetflixPlayer src={movie.movieUrl} autoControllCloseEnabled={false} fullPlayer={false}/>
            </div>

        </div>
    </div>
  )
}

export default Modal
