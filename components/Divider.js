import React from 'react'
import { Fragment } from 'react'


export default function Divider() {
    return (
        <Fragment>
            <div className="divider-container">
                {/* 2 lines and faq, change */}
                <div className="whitelinesmall right-line"></div>

                <h1>DONT GET IFFY, STAY JIFFY!</h1>
                <div className="whitelinesmall left-line"></div>
            </div>
        </Fragment>
    )
}
