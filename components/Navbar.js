import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo1 from '../assets/beach.png'

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="container">
                <div className="brand-name">
                    <h2>$StayYippy</h2></div>
                <div className="brand-logo">
                    <Image src={logo1} alt='logo 1' height={40} width={40} />
                </div>

                <div className="links-container">
                    <ul className='links'>
                        <li><Link href='/'><a>Home</a></Link></li>
                        <li><Link href='/Explore'><a>Explore</a></Link></li>
                        <li><Link href='/Login'><a>Login</a></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
