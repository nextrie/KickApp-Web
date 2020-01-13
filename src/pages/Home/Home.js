import React from 'react'
import "./Home.css"

//Components
import Header from  "./components/Header/Header.js"

export default function Home()
{
    return (
        <div className="homeContainer">
            <Header />
        </div>
    );
}