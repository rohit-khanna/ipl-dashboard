import React from 'react';
import './BlinkLabel.scss'

export default function BlinkLabel({ text }) {
    return (
        <div class="blink">
            <span>{text}</span>
        </div>
    )
}
