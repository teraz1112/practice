import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    // stateを定義してください
    this.state={count:0};
    
  }
  
  render() {
    return (
      <div>
        <h1>
          {/* stateの値を表示してください */}
          {this.state.count}
          
        </h1>
        {/* <button>タグを追加してください */}
        <button>+</button>
        
      </div>
    );
  }
}

export default App;
