import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      email: '',
    };
  }

  handleSubmit() {
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
        <form onSubmit={() => {this.handleSubmit()}}>
          <p>メールアドレス（必須）</p>
          {/* inputにonChangeイベントを追記してください */}
          <input
            value={this.state.email}
            onChange={(event)=>{
              console.log(event.target.value)
            }}
          />
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
