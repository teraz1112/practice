import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* isSubmittedというstateを定義してください */
      isSubmitted:false
    };
  }

  render() {
    /* 空の変数contactFormを定義してください */
    let contactForm;
    
    /* isSubmittedを条件式とするif文を作成してください */
    if(this.state.isSubmitted){
      contactForm=(<div className='contact-submit-message'>
          送信完了
        </div>);
    }
    else{
      contactForm=(<form>
          <p>メールアドレス（必須）</p>
          <input />
          <p>お問い合わせ内容（必須）</p>
          <textarea />
          <input
            type='submit'
            value='送信'
          />
        </form>
        );
    }
    
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
