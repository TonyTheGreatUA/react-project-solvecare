/* eslint-disable */
//@flow
import React from 'react';
import './App.css';
import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import Component1Container from './components/Component1/Component1Container';
const store = createStore(rootReducer);
type Props = {};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Component1Container />
        </div>
      </Provider>
    );
  }
}

export default App;
