import React from 'react';
import { Link, } from 'react-router-dom';


export default function SidebarItem({ label, selected, id }) {

    return (
        <div className={`sidebar_item ${selected ? "selected" : ""}`} title="See Stats">
            <Link to={`/team/${id}`}>{label}</Link>
        </div >)

}
