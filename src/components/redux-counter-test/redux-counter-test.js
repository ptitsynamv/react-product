import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Counter from './Counter';

const ReduxCounterTest = () => {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default ReduxCounterTest;
