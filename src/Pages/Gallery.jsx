import React from 'react'
import Card from '../components/Card/Card'
import NavBar from '../components/Navbar/NavBar'

function Gallery({width}) {
    let num = [1,2,3,4,5]
    return (
        <div className="gallery">
            <NavBar width={width}></NavBar>
            
            <div className="container cards">
            <h1 className="gallery-header">Artworks</h1>
            {num.map((index, card) =>(
                <div className="row" key={index}>
                    <div className="col-sm-12 col-lg-4">
                    <Card></Card>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                    <Card></Card>
                    </div>
                    <div className="col-sm-12 col-lg-4">
                    <Card></Card>
                    </div>
                  
                </div> 
            ))}
                
            </div>
           
        </div>
    )
}

export default Gallery
