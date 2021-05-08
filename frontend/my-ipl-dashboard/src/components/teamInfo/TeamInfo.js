import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './TeamInfo.scss';
import { fetchTeamInfo } from '../../services'
import Label from "../common/label";
import { isEmpty } from 'lodash';
import { BigCard, SmallCard } from '../matchCard';
import { Button } from 'react-bootstrap';



export default function TeamInfo() {
    const { teamId } = useParams();

    const [data, setData] = useState({})

    useEffect(() => {

        async function fetch() {
            const result = await fetchTeamInfo(teamId);
            setData(result);
        }

        if (teamId) {
            fetch()
        }
    }, [teamId]);
    const { name, matchesPlayed, wins, matches, id } = data;

    return !isEmpty(data) ? (
        <div className="teamInfoContainer">
            <h2 className="heading">{name}</h2>
            <div className="d-flex justify-content-space-around matchInfoContainer">
                <div className="matchesInfo d-flex">
                    <Label text="Matches Played:" bold />
                    <Label text={matchesPlayed} />
                </div>
                <div className="matchesInfo d-flex">
                    <Label text="Win % :" bold />
                    <Label text={`${wins * 100 / matchesPlayed} %`} />
                </div>
            </div>
            <div className="d-flex flex-column matchDetailsContainer">
                <BigCard />
                <div className="smallCards d-flex justify-content-space-between">
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />
                    <SmallCard />

                    <Button variant="link">{`More >>`}</Button>

                </div>
            </div>
        </div>
    ) : <h3>No Data Found</h3>

}
