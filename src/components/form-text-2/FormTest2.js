import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FormTest2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      advOpen: false,
    };
  }

  componentDidMount() {
    setTimeout(this.handleClick, 3000);
  }

  handleClick = () => {
    this.setState(({ advOpen }) => ({ advOpen: !advOpen }));
  };

  render() {
    return (
      <div
        style={{
          margin: '20px auto',
          width: '500px',
          border: '1px solid black',
        }}
      >
        <form
          onClick={this.handleClick}
          style={{ overflow: 'hidden', position: 'relative' }}
        >
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
          {this.state.advOpen ? (
            <Portal>
              <Message />
            </Portal>
          ) : null}
        </form>
      </div>
    );
  }
}

const Message = () => {
  return (
    <div
      style={{
        width: '500px',
        height: '150px',
        background: '#e8a7a7',
        position: 'absolute',
        right: '0',
        top: '0',
      }}
    >
      Hello
    </div>
  );
};

const Portal = (props) => {
  const node = document.createElement('div');
  document.body.appendChild(node);

  return ReactDOM.createPortal(props.children, node);
};

export default FormTest2;
