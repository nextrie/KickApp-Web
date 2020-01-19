import React from 'react'
import './App.css'
import "./Fonts.css"

//Pages

//Components
import Header from "./components/Header/Header.js";
import Features from "./components/Features/Features.js";

export default class App extends React.Component {
  render()
  {
    return (
      <div className="appContainer">
        <Header />
        <Features />
        <div className="placeholder">
          
        </div>
      </div>
    );
  }
}