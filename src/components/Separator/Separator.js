import React from 'react';
import "./Separator.css";

export default function Separator(props)
{
    return (
        <img src={getWave(props)} alt="wave" className="waveSeparator" />
    );
}

function getWave(props)
{
    if (props.separator)
        return props.separator;
    return null;
}