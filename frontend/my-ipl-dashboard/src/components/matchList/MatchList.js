import React, { useEffect, useState } from 'react'
import { ListGroup, Table } from 'react-bootstrap'
import { useParams, useLocation } from 'react-router'
import { map, range } from 'lodash';

import './MatchList.scss'
import { getJsonFromQueryString } from '../../utils';
import { fetchMatchesForTeam, fetchTeamInfo } from '../../services';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { parseISO } from 'date-fns/esm';

const yearList = range(2020, 2007);

export default function MatchList() {
    const { teamId } = useParams()
    const { search } = useLocation();

    const [data, setData] = useState([])
    const [teamInfo, setTeamInfo] = useState({ name: "" })
    const [searchedYear, setSearchedYear] = useState()


    useEffect(() => {
        const fetchMatchList = async (teamId, year) => {
            const result = await fetchMatchesForTeam(teamId, year)
            if (result && result.data) {
                setData(result.data)
            }
        }



        if (teamId) {
            const obj = getJsonFromQueryString(search || "");
            const yearToSearch = obj.year || 2020;
            fetchMatchList(teamId, yearToSearch)
            setSearchedYear(+yearToSearch)
        }

    }, [search, teamId])

    useEffect(() => {
        const fetchTeamData = async () => {
            const result = await fetchTeamInfo(teamId);
            if (result && result.data) {
                setTeamInfo(result.data)
            }
        }
        if (teamId) {
            fetchTeamData()
        }
    }, [teamId])


    return (
        <div className="matchListContainer">
            <div className="d-flex align-items-center justify-content-space-between">
                <Link to={`/team/${teamId}`}>{`< Back`}</Link>
                <h3 className="heading">{`Matches played by '${teamInfo.name}' in ${searchedYear}`}</h3>

            </div>


            <ListGroup horizontal >
                {map(yearList, year => <ListGroup.Item
                    key={year} title={year} active={year === searchedYear}>
                    <Link to={`/team/${teamId}/matches?year=${year}`}>
                        {year}
                    </Link>
                </ListGroup.Item>)}
            </ListGroup>

            <Table striped bordered hover variant="dark" size="sm" className="dataList">
                <thead>
                    <tr>
                        <th>W / L</th>
                        <th>Against</th>
                        <th>Match Date</th>
                        <th>City</th>
                        <th>Winner</th>
                        <th>Player of Match</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length ?
                        map(data, ({ team1, team2, playerOfMatch, date, city, venue, result, resultMargin, id, matchWinner }) => {

                            const isCurrentTeamIsWinner = matchWinner === teamInfo.name;

                            const vsTeam = team2 === teamInfo.name ? team1 : team2
                            return <tr key={id}>
                                <td className={`${isCurrentTeamIsWinner ? "green" : "red"} align-center`}>{isCurrentTeamIsWinner ? "W" : "L"}</td>
                                <td>{vsTeam}</td>
                                <td>{format(parseISO(date), "dd MMM yyyy")}</td>
                                <td>{city}</td>
                                <td>{`${matchWinner} won by ${resultMargin} ${result}`}</td>
                                <td>{playerOfMatch}</td>
                            </tr>
                        }) : <tr>
                            <td className="noData" colspan="6">
                                No Data Found
                            </td>
                        </tr>}
                </tbody>
            </Table>
        </div>
    )
}
