import React from 'react'
import "./Footer.css";
import PlayCircleOutLineIcon from "@material-ui/icons/PlayCircleOutlineOutlined" 
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid, Slider } from "@material-ui/core"
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlayOutlined"
import VolumeDownIcon from "@material-ui/icons/VolumeDown"

function Footer() {
    return (
        <div className="footer"> 
            <div className="footer_left">
                <img
                className="footer_albumLogo"
                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpmvH_F2v4_6iG0Koj47PKJM8TXXbkCJR9Yw&usqp=CAU"/>
                <div className="footer_songInfo">
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>

            <div className="footer_center">
                <ShuffleIcon className="footer_green"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleOutLineIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_green"/>
            </div>

            <div className="footer_right">
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