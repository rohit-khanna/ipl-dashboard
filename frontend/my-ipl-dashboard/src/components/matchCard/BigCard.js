import { format, parseISO } from 'date-fns';
import React from 'react';
import Label from '../common/label';
import './MatchCard.scss';

export default function BigCard({ matchDetails, name }) {


    const { city, date,
        playerOfMatch, venue, team1,
        team2, tossDecision, tossWinner,
        result, resultMargin, matchWinner } = matchDetails;

    const isCurrentTeamIsWinner = matchWinner === name;

    return (
        <div className="bigCardContainer d-flex flex-column justify-content-space-between">
            <div className="line head d-flex justify-content-space-between align-items-flex-end">
                <div className="teams d-flex">
                    <Label text="vs" size="xl" bold />
                    <Label text={`${team2 === name ? team1 : team2}`} size="xl" />
                </div>
                <div className="result">
                    <Label size="xl" text={isCurrentTeamIsWinner ? "Won" : "Lost"}
                        bold classes={`${isCurrentTeamIsWinner ? "green" : "red"}`} />
                </div>

            </div>
            <div className="line d-flex  justify-content-space-between align-items-flex-end flex-wrap">
                <div className="venue"> <Label size="s" text={`Venue: ${venue} , ${city}`} /></div>
                <div className="date"><Label text={`Date: ${format(parseISO(date), "dd MMM yyyy")}`} size="s" /></div>
                <div className="toss d-flex justify-content-space-between align-items-flex-end">
                    <Label size="s" text={`Toss: ${tossWinner} ( chose to ${tossDecision} )`} />
                </div>
            </div>

            <div className="line d-flex footer justify-content-space-between align-items-flex-end">

                <div className="d-flex">
                    <Label text={matchWinner} size="m" bold />

                    <Label size="m" text={`won by ${resultMargin} ${result}`} /></div>
                <div className="d-flex"> <Label text="Player Of Match:" size="m" bold />
                    <Label size="m" text={playerOfMatch} /></div>

            </div>
        </div>
    )
}
