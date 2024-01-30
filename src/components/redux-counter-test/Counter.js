import { connect, useSelector, useDispatch } from 'react-redux';
import { Button, Container } from 'react-bootstrap';
import { inc, dec } from './actions';
import { Component } from 'react';

const Counter = () => {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <Container>
      <p>Counter: {counter}</p>
      <Button onClick={() => dispatch(inc())}>Inc</Button>
      <Button onClick={() => dispatch(dec())}>Dec</Button>
    </Container>
  );
};

// const mapStatePops = (state) => {
//   return { counter: state };
// };

// export default connect(mapStatePops, actions)(Counter);
export default Counter;
