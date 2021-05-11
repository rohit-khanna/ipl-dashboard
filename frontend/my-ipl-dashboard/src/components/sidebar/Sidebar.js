import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import './Sidebar.scss';
import SidebarItem from './SidebarItem';
import { map, orderBy } from 'lodash';
import { fetchAllTeams } from '../../services';


export default function Sidebar() {
    const [data, setData] = useState([])
    const [teamId, setTeamId] = useState(0);

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


    useEffect(() => {
        if (pathname) {
            const _teamId = pathname.split('/team/')[1]?.split('/')[0] || "";
            setTeamId(_teamId)
        }
    }, [pathname])

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
