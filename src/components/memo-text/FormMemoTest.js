import { Button, Container } from 'react-bootstrap';
import { useState, memo, PureComponent, Component, useCallback } from 'react';

function propsCompare(prevProps, nextProps) {
  return (
    prevProps.mail.name === nextProps.mail.name &&
    prevProps.text === nextProps.text
  );
}

const FormMemoTest = memo((props) => {
  console.log('render');

  return (
    <Container>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <input
            value={props.mail}
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            value={props.text}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          />
        </div>
      </form>
    </Container>
  );
});

class FormWithPure extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.mail.name === nextProps.mail.name) {
      return false;
    }
    return true;
  }

  render() {
    console.log('render');

    return (
      <Container>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">Email address</label>
            <input
              value={this.props.mail.name}
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
              value={this.props.text}
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            />
          </div>
        </form>
      </Container>
    );
  }
}

function FormMemoTestWrapper() {
  const [data, setData] = useState({
    mail: 'mail@mail.com',
    text: 'my-text',
  });

  const onLog = useCallback(() => {
    console.log('onLog');
  }, []);

  return (
    <>
      <FormMemoTest mail={data.mail} text={data.text} onLog={onLog} />
      <Button
        onClick={() =>
          setData({
            mail: 'mail@mail.com',
            text: 'my-text',
          })
        }
      >
        Click me
      </Button>
    </>
  );
}

export default FormMemoTestWrapper;
