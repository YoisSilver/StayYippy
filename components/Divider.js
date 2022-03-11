import React, { useState } from 'react'
import { Fragment } from 'react'
import villa from "../assets/villa.jpg"
import Image from 'next/image';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
export default function Divider() {


    // const [show, setShow] = useState(false);

    return (
        <Fragment>
            <div className="divider-container">
                {/* 2 lines and faq, change */}
                <div className="whitelinesmall right-line"></div>
                <div className="list-container">


                    {/* {show ?  */}
                    {/* <ul className='hide' >
                            <li><p className="header"> Transparent:</p> everything is automated with the codebase published as open-source <br></br> so customers can look at it themselves and make sure its safe</li>
                            <li><p className="header">Most trusted:</p> we are the first and most used crypto hotel booking service.</li>
                            <li><p className="header">Cheapest:</p> we provide rates like none other.</li>
                            <li><p className="header">Privacy:</p> we take privacy seriously and know the limitations of a fiat system, <br></br> our services are designed keeping that in mind.</li>
                            <li><p className="header">Earn while travelling:</p> you get $StayYippy tokens everytime you book from us <br></br>which can be used to buy things provided by us.</li>
                        </ul> */}
                    {/* : null} */}



                    <div className="img-container">

                        <div className='ul-holder'>
                            <h3 className='why-us' onClick={() => setShow(!show)}>Still wondering why you should choose us?</h3>
                            <h3>You can check out our F.A.Q here <LibraryBooksIcon /></h3>
                            <h4 className='last-oneh3'>and here is the white paper<HistoryEduIcon /></h4>
                        </div>
                        <Image src={villa} height={625} width={460} alt='villa' />
                    </div>

                </div>
                <div className="whitelinesmall left-line"></div>
            </div>
        </Fragment >
    )
}
