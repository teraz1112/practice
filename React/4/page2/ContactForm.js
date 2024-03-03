import React from 'react';

class ContactForm extends React.Component {
  render() {
    return (
      <div className='contact-form'>
        <form>
          <p>メールアドレス（必須）</p>
          {/* inputタグを追加してください */}
          <input/>
          
          <p>お問い合わせ内容（必須）</p>
          {/* textareaタグを追加してください */}
          <textarea/>
          
          {/* 送信ボタンを追加してください */}
          <input
          type='submit' value='送信'/>
          
        </form>
      </div>
    );
  }
}

export default ContactForm;
