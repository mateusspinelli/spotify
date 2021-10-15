import React from 'react';
import "./css/Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from './Footer';

function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
            <Sidebar></Sidebar>
            <Body spotify={spotify}></Body>



            </div>
            <Footer spotify={spotify}></Footer>
        </div>
    )
}

export default Player
