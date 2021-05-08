import React from 'react';
import './Label.scss';

export default function Label({ size = "s", text = "", bold = false }) {
    return (
        <div className="labelContainer">
            <span className={`${size} ${bold ? "bold" : ""}`}>
                {text}
            </span>
        </div >
    )
}
