import React from 'react';
import { useLocation } from 'react-router';
import './Sidebar.scss';
import SidebarItem from './SidebarItem';
import { map } from 'lodash';
import BlinkLabel from '../common/blinkLabel'

const data = [{ name: "Delhi Capitals", id: "66" },
{ name: "Mumbai Indians", id: "980" }, { name: "Chennai Super Kings", id: "7650" }
]

export default function Sidebar() {
    const { pathname } = useLocation();
    const teamId = pathname.split('/team/')[1] || "";

    return (
        <aside className="sidebar d-flex flex-column">
            {!teamId ? <BlinkLabel text=" << Select Team >>" /> : <br />}
            {map(data, ({ name, id }) => (
                <SidebarItem
                    label={name}
                    key={id}
                    id={id}
                    selected={id.toString() === teamId.toString()}
                />
            ))}

        </aside>
    )
}
