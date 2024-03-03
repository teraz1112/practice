import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'にんじゃわんこ'};
  }
  
  // handleClickメソッドを定義してください
  handleClick(name){
    this.setState({name:name})
  }
  
  render() {
    return (
    	<div>
    	  <h1>こんにちは、{this.state.name}さん！</h1>
    	  {/* onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換えてください*/}
        <button onClick={() => {this.handleClick("ひつじ仙人")}}>ひつじ仙人</button>
        
    	  {/* onClickイベント内の処理を、handleClickメソッドを呼び出す処理に書き換えてください*/}
        <button onClick={() => {this.handleClick("にんじゃわんこ")}}>にんじゃわんこ</button>
        
      </div>
    );
  }
}

export default App;
