import React from "react";
import { Link, Navigate } from "react-router-dom";
import "./ColorDetail.css";

function ColorDetail({ color }) {
    if (!color) return <Navigate to="/colors" />

    // Create the style object with the dynamic color
    const headingStyle = {
        color: color
    };

    return (
        <div>
            <h1 style={headingStyle}>{color}</h1>
            <Link to="/colors">Go back</Link>
        </div>
    );
}

export default ColorDetail;