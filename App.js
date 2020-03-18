import React, { Component } from 'react'
import Main from './Components/Main'
import Splash from './Components/Splash'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {currentScreen: 'Splash'}  
    setInterval(() => {
        this.setState({currentScreen:''})
    }, 1500);
}
  render() {
    const {currentScreen} = this.state;

        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Main/>
        return mainScreen;
  }
}