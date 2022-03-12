import React from 'react'
import Image from 'next/image'
import Image4 from "../assets/rando.jpg"
import CasinoIcon from '@mui/icons-material/Casino';
import PaidIcon from '@mui/icons-material/Paid';
import Button from '@mui/material/Button';
import FilterVintageOutlinedIcon from '@mui/icons-material/FilterVintageOutlined';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import HoverVideoPlayer from 'react-hover-video-player';
import { Fragment } from 'react';

// import test from "../public/videos/vid1.mp4"

export default function Randomshow() {
    return (
        <Fragment>
            <div className="random-btn-cnt">
                <div className="rando-container">
                    <Image src={Image4} className="img1" height={850} width={570} alt="img4" />
                    {/* NOTE CHANGE ADD ON HOVER VIDEO ANIMATION */}
                    <div className="instructionhold">
                        <h2 className='fbttn'> Feeling adventurous or lucky? </h2>
                        <ul>
                            <li><h4 className='whynt'>why not test out your luck to see if you stumble upon a goldmine?</h4></li>
                            <li className='here whynt'><h3><AirplaneTicketOutlinedIcon />here you can roll to find your next destination</h3></li>
                            <li><h3 className='whynt'><a>so what are you waiting for?<FilterVintageOutlinedIcon /></a ></h3></li>
                            <li className='last'><CasinoIcon /></li>
                        </ul>
                        <div className="roll-btn">
                            <Button variant="contained" color="secondary">$ROLL</Button>

                        </div>
                    </div>

                </div></div>


            <div className="whitelinesmall-end" />
        </Fragment>
    )
}


