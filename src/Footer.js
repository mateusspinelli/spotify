import React from 'react'
import './css/Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

function Footer() {
    return (
        <div  className="footer">
            <div className="footer__left">

                <img className="footer__albumLogo" src="https://images-na.ssl-images-amazon.com/images/I/71SQ5kO9hIL._AC_SX466_.jpg" alt=""></img>

                <div className="footer__songInfo">
                    <h4>Hotel California - 2013 Remaster</h4>
                    <p>Eagles</p>
                </div>
            </div>


            <div className="footer__center">
                <ShuffleIcon className="footer__green"></ShuffleIcon>
                <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"></PlayCircleOutlineIcon>
                <SkipNextIcon className="footer__icon"></SkipNextIcon>
                <RepeatIcon className="footer__green"></RepeatIcon>
            </div>


            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
