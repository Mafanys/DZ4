import React from 'react';
import './App.css';
import Clock from './Component/Click';
import Counter from './Component/Counter';
import LifeComponent from './Component/LifeComponent';
import TextTranslate from './Component/TextTranslate';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isShow: false,
      isShowClock: true,
    }
    this.handelClick = this.handelClick.bind(this); 
    this.handelClickClock = this.handelClickClock.bind(this);    
    
  }
  handelClick(){
    this.setState({
      isShow: !this.state.isShow
    })
  }
  handelClickClock(){
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  }
  render(){  
  return (
    <div className="App">
      <button onClick={this.handelClick}>Click</button>
      {this.state.isShow && <LifeComponent />}
      <button onClick={this.handelClickClock}>Click Clock</button>
      {this.state.isShowClock && <Clock />}
      <Counter />
      <TextTranslate />
    </div>
  );
}
}

export default App;
