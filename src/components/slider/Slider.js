import { Component, useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import './Slider.css';

class Slider2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false,
      slide: 0,
    };
  }

  componentDidMount() {
    document.title = `Slide ${this.state.slide}`;
  }

  componentDidUpdate() {
    document.title = `Slide ${this.state.slide}`;
  }

  changeSlide = (i) => {
    this.setState(({ slide }) => ({
      slide: slide + i,
    }));
  };

  toggleAutoplay = () => {
    this.setState(({ autoplay }) => ({
      autoplay: !autoplay,
    }));
  };

  render() {
    return (
      <Container>
        <div className="slider w-50 m-auto">
          <img
            className="d-block w-100"
            src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
            alt="slide"
          />
          <div className="text-center mt-5">
            Active slide {this.state.slide} <br />{' '}
            {this.state.autoplay ? 'auto' : null}
          </div>
          <div className="buttons mt-3">
            <button
              className="btn btn-primary me-2"
              onClick={() => this.changeSlide(-1)}
            >
              -1
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={() => this.changeSlide(1)}
            >
              +1
            </button>
            <button
              className="btn btn-primary me-2"
              onClick={this.toggleAutoplay}
            >
              toggle autoplay
            </button>
          </div>
        </div>
      </Container>
    );
  }
}

const calcValue = () => {
  return Math.round(Math.random() * (50 - 1) + 1);
};

const countTotal = (num) => {
  console.log('counting');
  return num + 10;
};

const Slider = (props) => {
  const [slide, setSlide] = useState(calcValue);
  const [autoplay, setAutoplay] = useState(false);
  // const [state, setState] = useState({ slide: 0, autoplay: false });
  const getSomeImages = useCallback(() => {
    console.log('fetching');
    return [
      'https://images.unsplash.com/photo-1444465146604-4fe67bfac6e8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1517783999520-f068d7431a60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1696353506739-3a1e099eab72?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];
  }, []);

  useEffect(() => {
    document.title = `Slide ${slide}`;

    window.addEventListener('click', logging);

    return () => {
      window.removeEventListener('click', logging);
    };
  }, [slide]);

  function logging() {}

  function changeSlide(i) {
    setSlide((slide) => slide + i);
  }

  function toggleAutoplay() {
    setAutoplay((autoplay) => !autoplay);
  }

  const total = useMemo(() => countTotal(slide), [slide]);

  const style = useMemo(
    () => ({
      color: slide > 2 ? 'red' : 'green',
    }),
    [slide]
  );

  return (
    <Container>
      <div className="slider w-50 m-auto">
        {/* {getSomeImages().map((url, i) => {
          return (
            <img key={i} className="d-block w-100" src={url} alt="slide" />
          );
        })} */}
        <Slide getSomeImages={getSomeImages} />
        <div className="text-center mt-5">
          Active slide {slide} <br /> {autoplay ? 'auto' : null}
        </div>
        <div className="text-center mt-5" style={style}>
          Total slides: {total}
        </div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}
          >
            -1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}
          >
            +1
          </button>
          <button className="btn btn-primary me-2" onClick={toggleAutoplay}>
            toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  );
};

const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImages());
  }, [getSomeImages]);

  return (
    <>
      {images.map((url, i) => {
        return <img key={i} className="d-block w-100" src={url} alt="slide" />;
      })}
    </>
  );
};

function SliderWrapper() {
  const [slider, setSlider] = useState(true);

  return (
    <>
      <button onClick={() => setSlider(false)}>Show / hide slider</button>
      {slider ? <Slider /> : null}
    </>
  );
}

export default SliderWrapper;
