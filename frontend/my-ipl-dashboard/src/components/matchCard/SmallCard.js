import React from 'react';
import { getShortNames } from '../../utils';
import Label from '../common/label';
import './MatchCard.scss';


export default function SmallCard({ matchDetails, name }) {

    const { city, date,
        playerOfMatch, venue, team1,
        team2, tossDecision, tossWinner,
        result, resultMargin, matchWinner } = matchDetails;
    const isCurrentTeamIsWinner = matchWinner === name;

    const secondTeam = `${team2 === name ? (team1) : (team2)}`;
    return (
        <div className="smallCardContainer d-flex flex-column justify-content-space-between align-items-center" title={` vs ${secondTeam}`}>
            <div className="line head">
                <div className="teams d-flex ">
                    <Label text={` ${getShortNames(name)}`} size="m" bold />
                    <Label text="vs" size="m" />
                    <Label text={getShortNames(secondTeam)} size="m" bold />
                </div>


            </div>
            <div className="line d-flex footer ">

                <div className="d-flex flex-column  align-items-center">
                    <Label text={getShortNames(matchWinner)} size="l" />
                    <Label size="s" text={`won by ${resultMargin} ${result}`} />
                </div>

            </div>
            <div className="line head ">  <div className="result">
                <Label size="l" text={isCurrentTeamIsWinner ? "Won" : "Lost"}
                    bold classes={`${isCurrentTeamIsWinner ? "green" : "red"}`} />
            </div>
            </div>
        </div>
    )
}
