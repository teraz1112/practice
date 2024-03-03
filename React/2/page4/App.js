import React from 'react';
// Languageコンポーネントをインポートしてください
import Language from './Language';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>言語一覧</h1>
        <div className="language">
          {/* Languageコンポーネントを呼び出してください */}
          <Language/>
          
        </div>
      </div>
    );
  }
}

export default App;
