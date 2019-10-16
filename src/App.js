/* eslint-disable */
//@flow
import React from 'react';
import './App.css';
import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import { createStore } from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
const store = createStore(rootReducer);
type Props = {
  updateData: (
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    cardType: string,
    onFormValid: boolean,
  ) => void,
};

type State = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  cardType: string,
  isFormInfoVisibile: boolean,
  onFormValid: boolean,
};

class App extends React.Component<Props, State> {
  state = {
    firstName: '',
    lastName: '',
    creditCardNumber: '',
    isFormInfoVisibile: true,
    enteredWithError: '',
    cardType: '',
    onFormValid: true,
  };

  updateData = (
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    cardType: string,
    onFormValid: boolean,
  ) => {
    this.setState({
      firstName: firstName,
      lastName: lastName,
      creditCardNumber: creditCardNumber,
      cardType: cardType,
      onFormValid: onFormValid,
    });
  };

  render() {
    console.log('(render) App');
    return (
      <Provider store="store">
        <div className="App">
          <Component1 updateData={this.updateData} />
          <Component2
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            creditCardNumber={this.state.creditCardNumber}
            cardType={this.state.cardType}
            isFormInfoVisibile={this.state.isFormInfoVisibile}
            onFormValid={this.state.onFormValid}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
