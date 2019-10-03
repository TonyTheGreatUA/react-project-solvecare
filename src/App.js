import React from 'react';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      firstName: "",
      lastName: "",
      creditCardNumber: "",
      isFormInfoVisibile: true,
      enteredWithError: "", 
      cardType: ""
    }
  }
  
  updateData = (firstName, lastName, creditCardNumber, cardType) => {
    this.setState({
      firstName: firstName,
      lastName: lastName,
      creditCardNumber: creditCardNumber,
      cardType: cardType
    })
  }

  
  render(){
		return(
			<div className="App">
        <Component1 updateData={this.updateData}/>
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