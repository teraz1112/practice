import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'にんじゃわんこ'};
  }
  
  render() {
    return (
    	<div>
    	  <h1>こんにちは、{this.state.name}さん！</h1>
    	  {/* onClickの処理に、stateを変更する処理を加えてください */}
        <button onClick={() => {this.setState({name:"ひつじ仙人"})}}>ひつじ仙人</button>
        
        {/* onClickの処理に、stateを変更する処理を加えてください */}
        <button onClick={() => {this.setState({name:"にんじゃわんこ"})}}>にんじゃわんこ</button>
        
      </div>
    );
  }
}

export default App;
