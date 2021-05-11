import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { includes } from 'lodash';



export default function SidebarItem({ label, selected, id }) {
    const { pathname, search } = useLocation();



    const getLinkPath = (id) => {
        if (includes(pathname, "/matches")) {
            return `/team/${id}/matches${search}`
        }
        return `/team/${id}`
    }

    return (
        <div className={`sidebar_item ${selected ? "selected" : ""}`} title="See Stats">
            <Link to={getLinkPath(id)}>{label}</Link>
        </div >)

}
