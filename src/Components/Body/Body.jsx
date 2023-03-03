import React, { useState } from 'react'
import Imgs from './Components/Imgs';
import CardBody from './Components/CardBody';
import Uls from './Components/Uls';

function Body() {

    return (
        <div className='d-flex justify-content-center align-items-center mt-5 my-5'>
            <div className="card" style={{ width: '18rem' }}>

                <Imgs />

                <CardBody />

                <Uls />

                <div className="card-body">
                    <a href="#1" className="card-link">Card link</a>
                    <a href="#2" className="card-link">Another link</a>
                </div>

            </div></div>

    )
}

export default Body




