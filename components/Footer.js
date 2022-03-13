import React from 'react'
import Image from 'next/image'
import rose from "../assets/rose (1).png"
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InterestsIcon from '@mui/icons-material/Interests';
import { Fragment } from 'react';

export default function Footer() {
    return (
        <Fragment>
            <div className="footer-container">
                <div className="group1">
                    <ul className='header'>
                        <h4>Built by</h4>
                        <li><a href='https://github.com/YoisSilver'>YoisSilver</a></li>
                        <li><a href='https://github.com/YoisSilver'>Github</a></li>
                        <li><a href='https://github.com/YoisSilver'>2022© </a></li>
                    </ul>
                </div>
                <div className="group1">
                    <ul className='header'>
                        <h4>Built using:</h4>
                        <li><a href='https://nextjs.org/'>Next.js</a></li>
                        <li><a href="https://google.com">Mui</a></li>
                        <li><a href="https://sass-lang.com/">Scss</a></li>
                    </ul></div>
                <Image src={rose} height={50} width={50} layout="fixed" alt="rose-ico" className='rose' />
                <div className="group1">
                    <ul className='header'>
                        <h4>Hosted</h4>
                        <li><a href='https://vercel.com'>Vercel</a></li>
                        <li><a href='https://github.com'>Git</a></li>
                    </ul></div>
                <div className="group4-logo">
                    <ul className='header'>
                        <h4>Demo:</h4>
                        <li><a href='https://github.com/YoisSilver'><GitHubIcon className='icon' /></a></li>
                        <li><a href='https://github.com/YoisSilver'><TwitterIcon className='icon' /></a></li>
                        <li><a href='https://github.com/YoisSilver'><InterestsIcon className='icon' /></a></li>
                    </ul ></div >
            </div >
            <h6>all rights reserved™ 2022-2027</h6>
        </Fragment>
    )
}
