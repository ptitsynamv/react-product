import { useState, useReducer } from 'react';
import { Button, Container } from 'react-bootstrap';

function reducer(state, action) {
  switch (action.type) {
    case 'toggle':
      return { autoplay: !state.autoplay };
    case 'slow':
      return { autoplay: 300 };
    case 'fast':
      return { autoplay: 700 };
    case 'custom':
      return { autoplay: action.payload };
    default:
      throw new Error();
  }
}

function init(initial) {
  return { autoplay: 'initial' };
}

const SliderReducerTest = () => {
  const [slide, setSlide] = useState(0);
  const [autoplay, dispatch] = useReducer(reducer, { autoplay: false }, init);

  function changeSlide(i) {
    setSlide((slide) => slide + i);
  }

  return (
    <Container>
      <div className="slider w-50 m-auto">
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1444465146604-4fe67bfac6e8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="slide"
        />
        <div className="text-center mt-5">
          Active slide {slide} <br /> {autoplay.autoplay ? 'auto' : null}
        </div>
        <div className="buttons mt-3">
          <Button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </Button>
          <Button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </Button>
          <Button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: 'toggle' })}
          >
            toggle autoplay
          </Button>
          <Button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: 'slow' })}
          >
            toggle slow
          </Button>
          <Button
            className="btn btn-primary me-2"
            onClick={() => dispatch({ type: 'fast' })}
          >
            toggle fast
          </Button>
          <Button
            className="btn btn-primary me-2"
            onClick={(e) =>
              dispatch({ type: 'custom', payload: +e.target.textContent })
            }
          >
            1000
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SliderReducerTest;
