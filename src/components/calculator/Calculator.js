import { Component, Fragment, useState } from 'react';

class Calculator2 extends Component {
  max = 20;
  min = -20;

  constructor(props) {
    super(props);
    this.state = {
      countInfo: props.count,
    };
    this.onDec = this.onDec.bind(this);
  }

  onDec() {
    this.setState((state) => {
      let newCount = state.countInfo;
      if (state.countInfo - 1 >= this.min) {
        newCount--;
      }
      return {
        countInfo: newCount,
      };
    });
  }

  onInc = () => {
    this.setState((state) => {
      let newCount = state.countInfo;
      if (state.countInfo + 1 <= this.max) {
        newCount++;
      }
      return {
        countInfo: newCount,
      };
    });
  };

  onRnd() {
    this.setState({
      countInfo: Math.floor(
        Math.random() * (this.max - this.min + 1) + this.min
      ),
    });
  }

  onReset = () => {
    this.setState({ countInfo: this.props.count });
  };

  commitInput = (color) => {
    console.log({ color });
  };

  render() {
    return (
      <Fragment>
        <>
          <div
            style={{
              width: '500px',
              margin: 'auto',
              border: '1px solid green',
              padding: '20px',
            }}
          >
            <p>count info: {this.state.countInfo}</p>
            <button onClick={this.onInc}>inc</button>
            <button onClick={this.onDec}>dec</button>
            <button onClick={() => this.onRnd()}>rnd</button>
            <button onClick={this.onReset}>reset</button>
            <form action="">
              <span>Add</span>
              <input
                type="text"
                onChange={() => this.commitInput('my-color')}
              />
            </form>
          </div>
        </>
      </Fragment>
    );
  }
}

const useCalculatorSimple = (count) => {
  const max = 20;
  const min = -20;

  const [countInfo, setCountInfo] = useState(count | 0);

  function onInc() {
    if (countInfo + 1 > max) {
      return;
    }
    setCountInfo((countInfo) => countInfo + 1);
  }

  function onDec() {
    if (countInfo - 1 < min) {
      return;
    }
    setCountInfo((countInfo) => countInfo - 1);
  }

  function onRnd() {
    setCountInfo(Math.floor(Math.random() * (max - min + 1) + min));
  }

  function onReset() {
    setCountInfo(count | 0);
  }

  return { countInfo, onInc, onDec, onRnd, onReset };
};

const Calculator = (props) => {
  const calc = useCalculatorSimple(props.count);

  return (
    <div
      className="p-2 m-auto border"
      style={{
        width: '300px',
      }}
    >
      <p>count info: {calc.countInfo}</p>
      <button className="btn btn-outline-primary m-2" onClick={calc.onInc}>
        inc
      </button>
      <button className="btn btn-outline-primary m-2" onClick={calc.onDec}>
        dec
      </button>
      <button className="btn btn-outline-primary m-2" onClick={calc.onRnd}>
        rnd
      </button>
      <button className="btn btn-outline-primary m-2" onClick={calc.onReset}>
        reset
      </button>
    </div>
  );
};

const CalculatorSmall = (props) => {
  const calc = useCalculatorSimple(props.count);

  return (
    <div
      className="p-2 m-auto border"
      style={{
        width: '300px',
      }}
    >
      <p>count info: {calc.countInfo}</p>
      <button className="btn btn-outline-primary m-2" onClick={calc.onRnd}>
        rnd
      </button>
      <button className="btn btn-outline-primary m-2" onClick={calc.onReset}>
        reset{' '}
      </button>
    </div>
  );
};

const CalculatorWrapper = () => {
  return (
    <div className="d-flex flex-column" style={{ gap: 20 }}>
      <Calculator />
      <CalculatorSmall />
    </div>
  );
};

export default CalculatorWrapper;
