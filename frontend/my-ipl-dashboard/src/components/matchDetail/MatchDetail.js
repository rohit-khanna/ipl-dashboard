import React from 'react'
import { useParams } from 'react-router'

export default function MatchDetail() {
    const { teamId, matchId } = useParams()

    return (
        <div>
            Match Info {teamId}- {matchId}
        </div>
    )
}
