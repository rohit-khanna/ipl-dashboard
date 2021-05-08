import React from 'react';
import './Label.scss';

export default function Label({ size = "m", text = "", bold = false, classes = "" }) {
    return (
        <div className="labelContainer">
            <span className={`${size} ${bold ? "bold" : ""} ${classes}`}>
                {text}
            </span>
        </div >
    )
}
