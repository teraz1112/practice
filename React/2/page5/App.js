import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>言語一覧</h1>
        <div className="language">
          <Language />
          {/* Languageコンポーネントを2回呼び出してください */}
          <Language />
          <Language />
        </div>
      </div>
    );
  }
}

export default App;
