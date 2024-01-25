import { Component, useState } from 'react';
import { Button } from 'react-bootstrap';
import FormContextTest from './FormContext';
import dataContext from './context';

const { Provider } = dataContext;

class InputComponent extends Component {
  static contextType = dataContext;

  render() {
    return (
      //   <Consumer>
      //     {(value) => {
      //       return (
      //         <input
      //           value={value.mail}
      //           type="email"
      //           className="form-control"
      //           id="exampleFormControlInput1"
      //           placeholder="name@example.com"
      //         />
      //       );
      //     }}
      //   </Consumer>
      <input
        value={this.context.mail}
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    );
  }
}

function FormContextTestWrapper() {
  const [data, setData] = useState({
    mail: 'mail@mail.com',
    text: 'my-text',
    forceChangeMail,
  });

  function forceChangeMail() {
    setData((state) => ({ ...state, mail: 'force-change@mail.com' }));
  }

  return (
    <Provider value={data}>
      <FormContextTest text={data.text} />
      <Button
        onClick={() =>
          setData({
            mail: 'second@mail.com',
            text: 'second-text',
            forceChangeMail,
          })
        }
      >
        Click me
      </Button>
    </Provider>
  );
}

export default FormContextTestWrapper;
