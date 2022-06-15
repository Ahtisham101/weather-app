import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MainContent } from '../components/MainContent'
import { SideBar } from '../components/SideBar'

const Home: NextPage = () => {
  return (
    <div className="bg-[#100E1D] flex flex-col lg:flex-row">
    <SideBar />
    <MainContent />
  </div>
  )
}

export default Home
