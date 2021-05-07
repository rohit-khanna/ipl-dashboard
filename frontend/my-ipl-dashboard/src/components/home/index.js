import React from 'react'
import { Image } from 'react-bootstrap';
import image from '../../resources/AllWinners.jpg';


export default function index() {
    return (
        <div className="d-flex  align-items-center">
            <Image src={image} style={{ width: "45rem" }} />
        </div>
    )
}
