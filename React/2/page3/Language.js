// Reactをインポートしてください
import React from 'react';

// Languageクラスを定義してください
class Language extends React.Component{
  render(){
    return(
      <div className='language-item'>
        <div className='language-name'>HTML & CSS</div>
        <img className='language-image' src='https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg' />
      </div>
      );
  }
}
