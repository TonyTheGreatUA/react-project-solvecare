/* eslint-disable */
//@flow
import React from 'react';
import './App.css';
import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import Component1Container from './components/Component1/Component1Container';
import Component2Container from './components/Component2/Component2Container';
const store = createStore(rootReducer, applyMiddleware(logger));
type Props = {};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Component1Container />
          <Component2Container />
        </div>
      </Provider>
    );
  }
}

export default App;
