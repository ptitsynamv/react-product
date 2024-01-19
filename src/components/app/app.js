import './app.css';
import { Component, Fragment } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import ProductList from '../product-list/product-list';
import ProductAddForm from '../product-add-form/product-add-form';
import styled from 'styled-components';

class WhyAmI extends Component {
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
          <p>{this.state.countInfo}</p>
          <button onClick={this.onInc}>inc</button>
          <button onClick={this.onDec}>dec</button>
          <button onClick={() => this.onRnd()}>rnd</button>
          <button onClick={this.onReset}>reset</button>
          <form action="">
            <span>Add</span>
            <input type="text" onChange={() => this.commitInput('my-color')} />
          </form>
        </>
      </Fragment>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Milk',
          sale: 200,
          cookie: true,
          increase: false,
          like: true,
          id: 1,
        },
        {
          name: 'Bread',
          sale: 3500,
          cookie: false,
          increase: false,
          like: false,
          id: 2,
        },
        {
          name: 'Cola',
          sale: 1000,
          cookie: true,
          increase: false,
          like: false,
          id: 3,
        },
      ],
      maxId: 4,
      term: '',
      filter: 'all',
    };
  }

  onDeleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  onAdd = ({ name, sale }) => {
    this.setState(({ data, maxId }) => {
      return {
        data: [...data, { name, sale, id: maxId, rise: false }],
        maxId: maxId + 1,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchProduct = (items, term) => {
    if (!term.length) {
      return items;
    }
    return items.filter((item) => item.name.indexOf(term) > -1);
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onChangeFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  filterProduct = (items, filter) => {
    if (filter === 'star') {
      return items.filter((item) => item.like);
    }
    if (filter === 'sale') {
      return items.filter((item) => item.sale > 1000);
    }
    return items;
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterProduct(
      this.searchProduct(data, term),
      filter
    );

    const count = data.length;
    const like = data.filter((item) => item.like).length;
    return (
      <div className="app">
        <AppInfo count={count} like={like} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onChangeFilter={this.onChangeFilter} filter={filter} />
        </div>
        <ProductList
          data={visibleData}
          onDelete={this.onDeleteItem}
          onToggleProp={this.onToggleProp}
        />
        <ProductAddForm onAdd={this.onAdd} />
      </div>
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
`;

const EmpItem = styled.div`
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 5px;

  input {
    color: ${(props) => (props.active ? 'orange' : 'black')};
    margin-top: 10px;
  }
`;

const Header = styled.h2`
  font-size: 22px;
`;

export const Button = styled.button`
  background: yellow;
`;

class App2 extends Component {
  render() {
    return (
      <Wrapper>
        <EmpItem active="true">
          <Header>My header 2</Header>
          <Button>button</Button>
          <WhyAmI count={10} />
        </EmpItem>
      </Wrapper>
    );
  }
}

export default App;
