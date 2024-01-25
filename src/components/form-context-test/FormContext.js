import { Container } from 'react-bootstrap';
import InputComponent2 from './Input';

const FormContextTest = (props) => {
  console.log('render');

  return (
    <Container>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email address</label>
          <InputComponent2 />
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
};

export default FormContextTest;
