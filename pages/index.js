import Head from 'next/head'
import Image from 'next/image'
import Destinations from '../components/Destinations'
import Divider from '../components/Divider'
import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'

export default function Home() {
  return (
    <div className="app-container">
      <Navbar />
      <Searchbar />
      <Destinations />
      <Divider />
    </div>
  )
}
