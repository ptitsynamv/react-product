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

const Calculator = (props) => {
  const max = 20;
  const min = -20;
  const [countInfo, setCountInfo] = useState(props.count | 0);

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
    setCountInfo(
      Math.floor(Math.random() * (max - min + 1) + min)
    );
  }

  function onReset() {
    setCountInfo(props.count | 0);
  }

  function commitInput() {}

  return (
    <div
      style={{
        width: '500px',
        margin: 'auto',
        border: '1px solid green',
        padding: '20px',
      }}
    >
      <p>count info: {countInfo}</p>
      <button onClick={onInc}>inc</button>
      <button onClick={onDec}>dec</button>
      <button onClick={onRnd}>rnd</button>
      <button onClick={onReset}>reset</button>
      <form action="">
        <span>Add</span>
        <input type="text" onChange={() => commitInput('my-color')} />
      </form>
    </div>
  );
};

export default Calculator;
