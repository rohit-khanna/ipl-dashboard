import React from 'react'
import { useParams } from 'react-router'

export default function MatchList() {
    const { teamId } = useParams()

    return (
        <div>
            Match List Component : {teamId}
        </div>
    )
}
