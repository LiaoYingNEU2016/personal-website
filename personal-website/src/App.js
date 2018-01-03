import React, { Component } from 'react';
import './App.css';
import SelfIntro from './component/SelfIntro';
import Portfolio from './component/Portfolio';
import About from './component/About'

class App extends Component {
  render() {
    return (
      <div className="">
        <SelfIntro />
        <About />
        <Portfolio />
      </div>
    );
  }
}

export default App;
