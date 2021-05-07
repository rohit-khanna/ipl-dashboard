import React from 'react'
import { useParams } from 'react-router'

export default function MatchInfo() {
    const { teamId, matchId } = useParams()

    return (
        <div>
            Match Info {teamId}- {matchId}
        </div>
    )
}
