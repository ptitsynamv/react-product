import React, { Component, useRef, useState, useEffect } from 'react';

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

// custom hook
function useInputWithValidate(initialValue) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const validateInput = () => {
    return value.search(/\d/) >= 0;
  };

  return { value, onChange, validateInput };
}

const FormWithRef = () => {
  const input = useInputWithValidate('');
  const textArea = useInputWithValidate('');

  const color = input.validateInput() ? 'text-danger' : null;

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
          <input
            type="text"
            className="form-control"
            value={`${input.value} / ${textArea.value}`}
            readOnly
          />
          <label className="mt-3" htmlFor="exampleFormControlInput1">
            Email address
          </label>
          <input
            type="email"
            value={input.value}
            className={`form-control ${color}`}
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={input.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={textArea.value}
            onChange={textArea.onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default FormWithRef;
