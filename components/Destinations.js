import React, { useRef, useState } from 'react'
import Image from 'next/image'
import img1 from '../assets/venice.jpg'
import Cards from './Cards';
import { Fragment } from 'react';
import imglog from "../assets/vacation.png"

export default function Destinations() {


    return (
        <Fragment>

            <div className="desti-container">
                <h2><Image src={imglog} alt="img h2 text" className='text-img' height={30} width={30} /> Choose from our amazing collection of hotels to book from:</h2>
                <div className="container">

                    <div className="card-container">

                        <Cards />
                        {/* <Cards />
                    <Cards />
                    <Cards /> */}
                    </div>
                </div>
            </div>
        </Fragment>
    )

}
