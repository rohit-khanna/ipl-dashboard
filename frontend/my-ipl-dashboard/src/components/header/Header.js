import React from 'react';
import { Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../resources/IPL.png'
import './Header.scss';
import BlinkLabel from '../common/blinkLabel';
import Label from '../common/label';

export default function Header() {
    const { pathname } = useLocation();
    const teamId = pathname.split('/team/')[1] || "";
    return (
        <header className="d-flex align-items-flex-end ">
            <Link to="/">
                <Image src={Logo} className="logo" thumbnail alt="logo" title="Home" />
            </Link>
            <div className="information">
                {!teamId ? <BlinkLabel text=" << Select Team >>" /> : <br />}
                {/* {teamId ? <h1>Team Information</h1> : ""} */}
            </div>
            <Label size="s" text="Data Set: 2008-2020" />

        </header>
    )
}
