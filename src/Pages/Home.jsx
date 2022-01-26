import React from 'react'
import Carousel from '../components/Carousel/Carousel'
import NavBar from '../components/Navbar/NavBar'

function Home({width}) {
    return (
        <div className="home">
            <NavBar width={width}></NavBar>
           <Carousel width={width}></Carousel>
     
        </div>
    )
}

export default Home
