import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
    };
  }

  /* handleSubmitメソッドを定義してください  */
  handleSubmit(){
    this.setState({isSubmitted: true});
  }

  render() {
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        /* formタグにonSubmitを追加してください */
        <form  onSubmit={()=>{this.handleSubmit()}}>
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
