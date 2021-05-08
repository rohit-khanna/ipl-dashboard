import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './Sidebar.scss';
import SidebarItem from './SidebarItem';
import { map, orderBy } from 'lodash';
import { fetchAllTeams } from '../../services';


export default function Sidebar() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function fetch() {
            const result = await fetchAllTeams();
            if (result.data) {
                const sortedRecords = orderBy(result.data, 'name')
                setData(sortedRecords);
            }
        }

        fetch()
    }, []);

    const { pathname } = useLocation();
    const teamId = pathname.split('/team/')[1] || "";

    return (
        <aside className="sidebar d-flex flex-column">
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
