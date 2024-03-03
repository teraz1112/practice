import React from 'react';
import Language from './Language';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>言語一覧</h1>
        <div className='language'>
          {/* HTML & CSSのpropsを渡してください */}
          <Language 
            name='HTML & CSS'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
          />
          {/* JavaScriptのpropsを渡してください */}
          <Language 
            name="JavaScript"
            image="https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg"
          />
          {/* Reactのpropsを渡してください */}
          <Language 
            name='React'
            image='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg'
          />
        </div>
      </div>
    );
  }
}

export default App;