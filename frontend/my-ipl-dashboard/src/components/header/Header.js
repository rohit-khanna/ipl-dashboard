import React from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../resources/IPL.png'
import './Header.scss';


export default function Header() {
    return (
        <header className="d-flex align-items-center">
            <Link to="/">
                <Image src={Logo} className="logo" thumbnail alt="logo" title="Home" />
            </Link>
            {/* <h1>Dashboard</h1> */}

        </header>
    )
}