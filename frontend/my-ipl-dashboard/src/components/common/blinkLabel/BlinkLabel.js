import React from 'react';
import './BlinkLabel.scss'

export default function BlinkLabel({ text }) {
    return (
        <div className="blink">
            <span>{text}</span>
        </div>
    )
}
