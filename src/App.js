/* eslint-disable */
//@flow
import React from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

type Props = {
  updateData: (
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    cardType: string,
  ) => void,
};

type State = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  cardType: string,
  isFormInfoVisibile: boolean,
};
class App extends React.Component<Props, State> {
  state = {
    firstName: '',
    lastName: '',
    creditCardNumber: '',
    isFormInfoVisibile: true,
    enteredWithError: '',
    cardType: '',
  };

  updateData = (
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    cardType: string,
  ) => {
    this.setState({
      firstName: firstName,
      lastName: lastName,
      creditCardNumber: creditCardNumber,
      cardType: cardType,
    });
  };

  render() {
    console.log('(render) App');
    return (
      <div className="App">
        <Component1 updateData={this.updateData} />
        <Component2
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          creditCardNumber={this.state.creditCardNumber}
          cardType={this.state.cardType}
          isFormInfoVisibile={this.state.isFormInfoVisibile}
        />
      </div>
    );
  }
}

export default App;
