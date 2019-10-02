import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const cardRegex = RegExp(
  /^[0-9]{16}$/
);
const cvvRegex = RegExp(
  /^[0-9]{3,4}$/
);
const expRegex = RegExp(
  /^(0[1-9]|1[0-2])\/?([0-9]{2})$/
)
const isFormValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Component1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      creditCardNumber: null,
      cvv: null,
      expirationDate: null,
      firstName: null,
      lastName: null,
      secretQuestion: null,
      secretAnswer: null,
      enteredWithError: null,
      formErrors: {
        creditCardNumber: "",
        expirationDate: "",
        cvv: "",
        firstName: "",
        lastName: "",
        secretQuestion: "",
        secretAnswer: ""
      }
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    if (isFormValid(this.state)) {
      console.log(`
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        CardNumber: ${this.state.creditCardNumber}
        Expiration Date: ${this.state.expirationDate}
        CVV/CVC: ${this.state.cvv}
        Secret Question: ${this.state.secretQuestion}
        Secret Answer: ${this.state.secretAnswer}
      `);
    } else {
      console.error("invalid - error");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "secretQuestion":
        formErrors.secretQuestion =
          value.length < 10 ? "minimum 10 characaters required" : "";
        break;
      case "secretAnswer":
        formErrors.secretAnswer =
          value.length < 10 ? "minimum 10 characaters required" : "";
        break;
      case "creditCardNumber":
        formErrors.creditCardNumber = cardRegex.test(value)
          ? ""
          : "invalid card number";
        break;
      case "cvv":
        formErrors.cvv = cvvRegex.test(value)
          ? ""
          : "invalid CVV/CVC";
        break;
      case "expirationDate":
        formErrors.expirationDate = expRegex.test(value)
          ? ""
          : "invalid MM/YY";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render(){
    const { formErrors } = this.state;
    return(
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Credit Card Home Task</h1>
          <form onSubmit={this.handleSubmit}  noValidate>
            <div className="creditCardNumber">
              <label htmlFor="creditCardNumber">Credit Card Number</label>
              <input 
                type="text"
                className={formErrors.creditCardNumber.length > 0 ? "error" : null}
                placeholder={this.props.creditCardNumber}
                noValidate
                name="creditCardNumber"
                onChange={this.handleChange}
              />
              {formErrors.creditCardNumber.length > 0 && (
                <span className="errorMessage">{formErrors.creditCardNumber}</span>
              )}
            </div>
            <div className="expDate">
              <label htmlFor="expDate">Expiration Date</label>
              <input 
                type="text"
                className={formErrors.expirationDate.length > 0 ? "error" : null}
                placeholder={this.props.expirationDate}
                noValidate
                name="expirationDate"
                onChange={this.handleChange}
              />
              {formErrors.expirationDate.length > 0 && (
                <span className="errorMessage">{formErrors.expirationDate}</span>
              )}
            </div>

            <div className="cvv">
              <label htmlFor="cvv">CVV/CVC</label>
              <input 
                type="text"
                className={formErrors.cvv.length > 0 ? "error" : null}
                placeholder={this.props.cvv}
                noValidate
                name="cvv"
                onChange={this.handleChange}
              />
              {formErrors.cvv.length > 0 && (
                <span className="errorMessage">{formErrors.cvv}</span>
              )}
            </div>

            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input 
                type="text"
                className={formErrors.firstName.length > 0 ? "error" : null}
                placeholder={this.props.firstName}
                noValidate
                name="firstName"
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input 
                type="text"
                className={formErrors.lastName.length > 0 ? "error" : null}
                placeholder={this.props.lastName}
                noValidate
                name="lastName"
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>

            <div className="secretQuestion">
              <label htmlFor="secretQuestion">Secret Question</label>
              <input 
                type="text"
                className={formErrors.secretQuestion.length > 0 ? "error" : null}
                placeholder={this.props.secretQuestion}
                noValidate
                name="secretQuestion"
                onChange={this.handleChange}
              />
              {formErrors.secretQuestion.length > 0 && (
                <span className="errorMessage">{formErrors.secretQuestion}</span>
              )}
            </div>

            <div className="secretAnswer">
              <label htmlFor="secretAnswer">Secret Answer</label>
              <input 
                type="text"
                className={formErrors.secretAnswer.length > 0 ? "error" : null}
                placeholder={this.props.secretAnswer}
                noValidate
                name="secretAnswer"
                onChange={this.handleChange}
              />
              {formErrors.secretAnswer.length > 0 && (
                <span className="errorMessage">{formErrors.secretAnswer}</span>
              )}
            </div>

            <div className="submitButton">
              <button onClick={
              ()=>{
                this.props.updateData(this.state.firstName, this.state.lastName, this.state.creditCardNumber);
              }} type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
Component1.propTypes = {
  creditCardNumber: PropTypes.string,
  expirationDate: PropTypes.string,
  cvv: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  secretQuestion: PropTypes.string,
  secretAnswer: PropTypes.string
}
Component1.defaultProps = {
  creditCardNumber: "0000 0000 0000 0000",
  expirationDate: "MM/YY",
  cvv: "CVV/CVC",
  firstName: "Your Name",
  lastName: "Your Surname",
  secretQuestion: "Your secret question",
  secretAnswer: "Your secret answer"
}
class Component2 extends React.Component {
  state = {
    isFormInfoVisibile: false
  } 

  componentDidUpdate = () => {
    
  }
  render(){
    return(
      <div className="wrapper">
        <div className="form-wrapper2">
          <span>Card Info</span>
          <span className="cardError">Error</span>
          <span className="cardInfo">First Name : {this.props.firstName}</span>
          <span className="cardInfo">Last Name : {this.props.lastName}</span>
          <span className="cardInfo">Credit Card : {(this.props.creditCardNumber).substr(this.props.creditCardNumber.length - 4)}</span>
        </div>
      </div>
    );
  }
  
}

class App extends React.Component {
  state ={
    firstName: "",
    lastName: "",
    creditCardNumber: "",
    isFormInfoVisibile: true,
    enteredWithError: ""
  }
  updateData = (firstName, lastName, creditCardNumber) => {
    this.setState({
      firstName: firstName,
      lastName: lastName,
      creditCardNumber: creditCardNumber
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
        isFormInfoVisibile={this.state.isFormInfoVisibile}
        />
			</div>
		);
  }
}
export default App;