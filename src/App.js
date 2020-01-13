import React from 'react'
import './App.css'

//Pages
import Home from "./pages/Home/Home.js"

//Components
import NavBar from "./components/NavBar/NavBar.js"

//Logo
import Logo from "./assets/kick.jpg"

export default class App extends React.Component {

  constructor(props)
  {
    super(props);

    this.state = {
      selectedPage: null
    };
  }

  render()
  {
    return (
      <div className="appContainer">
        <NavBar logo={Logo} />
        {this.state.selectedPage ? this.state.selectedPage : <Home />}
      
      </div>
    );
  }
}