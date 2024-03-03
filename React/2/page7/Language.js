import React from 'react';

class Language extends React.Component {
  render() {
    return (
      <div className='language-item'>
        {/* props名nameの値を表示するように書き換えてください */}
        <div className='language-name'>{this.props.name}</div>
        
        {/* src属性の値を、props名imageの値に書き換えてください */}
        <img 
          className='language-image'
          src={this.props.image}
        />
        
      </div>
    );
  }
}

export default Language;
