import React from 'react';
import { Link } from "react-router-dom";
import "./ColorList.css";


function ColorList({ colors }) {
    
    return (
        <div>
            <Link to="/colors/new">Add a Color</Link>
            <div>
                <ul>
                {colors.map(({id, color}) => <li key={id}><Link  to={`/colors/${color}`}>{color}</Link></li>)}
                </ul>
                
            </div>
        </div>
    );
}

export default ColorList;