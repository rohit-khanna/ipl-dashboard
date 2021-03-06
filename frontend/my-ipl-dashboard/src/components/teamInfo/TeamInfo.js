import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './TeamInfo.scss';
import { fetchTeamInfo } from '../../services'
import Label from "../common/label";
import { isEmpty, round } from 'lodash';
import { BigCard, SmallCard } from '../matchCard';
import { Button } from 'react-bootstrap';
import { getShortNames } from '../../utils';



export default function TeamInfo() {
    const { teamId } = useParams();

    const [data, setData] = useState({})

    useEffect(() => {

        async function fetch() {
            const result = await fetchTeamInfo(teamId);
            if (result.data)
                setData(result.data);
        }

        if (teamId) {
            fetch()
        }
    }, [teamId]);
    const { name, totalMatches, totalWins, matches } = data;

    const winPercent = totalWins > 0 && totalMatches > 0 ? round(totalWins * 100 / totalMatches, 2) : 0
    return !isEmpty(data) ? (
        <div className="teamInfoContainer">
            <h2 className="heading">{`${name} (${getShortNames(name)})`}</h2>
            <div className="d-flex justify-content-space-around matchInfoContainer">
                <div className="matchesInfo d-flex">
                    <Label text="Matches Played:" bold />
                    <Label text={totalMatches} />
                </div>
                <div className="matchesInfo d-flex">
                    <Label text="Win % :" bold />
                    <Label classes={`${winPercent > 50 ? "green" : "red-light"}`} text={winPercent} />
                </div>
            </div>
            <div className="d-flex flex-column matchDetailsContainer">
                <BigCard matchDetails={matches[0]} name={name} />
                <div className="smallCards d-flex justify-content-space-between">
                    <SmallCard matchDetails={matches[1]} name={name} />
                    <SmallCard matchDetails={matches[2]} name={name} />
                    <SmallCard matchDetails={matches[3]} name={name} />
                    <SmallCard matchDetails={matches[4]} name={name} />

                    <Button variant="link">
                        <Link to={`/team/${teamId}/matches?year=${2020}`}>{`More >>`}</Link>
                    </Button>

                </div>
            </div>
        </div>
    ) : <h3>No Data Found</h3>

}
