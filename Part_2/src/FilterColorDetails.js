import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ColorDetail from './ColorDetail';


function FilterColorDetails({ colors }) {
    const { color } = useParams();

    if (color) {
        const currentColor = colors.find(
            colorObj => colorObj.color.toLowerCase() === color.toLowerCase()
        );
        if(!currentColor) {
            return <Navigate to="/colors"/>
        }
        return <ColorDetail color={currentColor.color} />
    }

    return null;
}

export default FilterColorDetails;