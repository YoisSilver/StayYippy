import Head from 'next/head'
import Image from 'next/image'
// import { useEffect } from 'react'
// import ScrollReveal from 'scrollreveal'
import Destinations from '../components/Destinations'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Randomshow from '../components/Randomshow'
import Searchbar from '../components/Searchbar'

export default function Home() {

  // ADD ANIMATIONS CHANGE


  return (
    <div className="app-container">
      <Navbar />
      <Searchbar />
      <Destinations />
      <Divider />
      <Randomshow />
      <Footer />
    </div>
  )
}
