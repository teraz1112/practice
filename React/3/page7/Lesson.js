import React from 'react';

class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  render() {
    // 変数modalを定義してください
    let modal;
    
    // if文を用意してください
    if(this.state.isModalOpen){
      modal=(
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
            </div>
            <button className='modal-close-btn'>
              とじる
            </button>
          </div>
        </div>
        );
    }
    
    return (
      <div className='lesson-card'>
        <div className='lesson-item'>
          <p>{this.props.name}</p>
          <img src={this.props.image} />
        </div>
        {/* 下のコードを消してください */}
        
        {/* ここまで */}
        
        {/* 変数モーダルを表示してください */}
        {modal}
      </div>
    );
  }
}

export default Lesson;
