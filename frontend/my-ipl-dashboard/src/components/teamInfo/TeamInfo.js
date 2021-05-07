import React from 'react';
import { useParams } from 'react-router-dom';

export default function TeamInfo() {
    const { teamId } = useParams()
    return (
        <div>
            Team Info : {teamId}
        </div>
    )
}
