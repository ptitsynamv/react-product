import React, { Component } from 'react';

class FormTest extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  //   componentDidMount() {
  //     this.myRef.current.focus();
  //   }

  focusFisrt = () => {
    if (this.myRef) {
      this.myRef.focus();
    }
  };

  setInputRef = (elem) => {
    this.myRef = elem;
  };

  render() {
    return (
      <div
        style={{
          margin: '20px auto',
          width: '300px',
          border: '1px solid black',
        }}
      >
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              ref={this.setInputRef}
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
            {/* <TextInput ref={this.myRef} /> */}
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              onClick={this.focusFisrt}
            />
          </div>
        </form>
      </div>
    );
  }
}

class TextInput extends Component {
  doSmt = () => {
    console.log('doSmt');
  };

  render() {
    return (
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    );
  }
}

export default FormTest;
