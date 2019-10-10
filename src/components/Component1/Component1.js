/* eslint-disable */
//@flow

import React from 'react';
import './Component1.css';
import Component3 from '../Component3/Component3';

const cardRegex = RegExp(/^[0-9]{16}$/);
const cvvRegex = RegExp(/^[0-9]{3,4}$/);
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
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
  cardType: string,
  creditCardNumber: string,
  formErrors: {
    firstName: boolean,
    lastName: boolean,
    cvv: boolean,
    expirationDate: boolean,
    secretQuestion: boolean,
    secretAnswer: boolean,
    creditCardNumber: boolean,
  },
  firstName: string,
  lastName: string,
  cvv: string,
  expirationDate: string,
  secretQuestion: string,
  secretAnswer: string,
  onFormValid: boolean,
  isSubmitted: boolean,
};

class Component1 extends React.PureComponent<Props, State> {
  state = {
    creditCardNumber: '',
    cvv: '',
    expirationDate: '',
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
    enteredWithError: '',
    cardType: '',
    onFormValid: true,
    isSubmitted: false,
    formErrors: {
      creditCardNumber: true,
      expirationDate: true,
      cvv: true,
      firstName: true,
      lastName: true,
      secretQuestion: true,
      secretAnswer: true,
    },
  };

  updateCardType = (cardType: string) => {
    this.setState({
      cardType: cardType,
    });
  };

  handleSubmit = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    let formErrors = { ...this.state.formErrors };
    let onFormValid = this.state.onFormValid;

    for (let i in formErrors) {
      if (formErrors[i] !== true) {
        onFormValid = false;
        this.setState({ onFormValid: onFormValid });
      }
    }
    this.setState({ onFormValid, isSubmitted: true }, () => {
      this.props.updateData(
        this.state.firstName,
        this.state.lastName,
        this.state.creditCardNumber,
        this.state.cardType,
        this.state.onFormValid,
      );
    });
    return true;
  };
  onValidation = (name: string, value: string) => {
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 3 ? false : true;
        break;
      case 'lastName':
        formErrors.lastName = value.length < 3 ? false : true;
        break;
      case 'secretQuestion':
        formErrors.secretQuestion = value.length < 10 ? false : true;
        break;
      case 'secretAnswer':
        formErrors.secretAnswer = value.length < 10 ? false : true;
        break;
      case 'creditCardNumber':
        formErrors.creditCardNumber = cardRegex.test(value) ? true : false;
        break;
      case 'cvv':
        formErrors.cvv = cvvRegex.test(value) ? true : false;
        break;
      case 'expirationDate':
        formErrors.expirationDate = expRegex.test(value) ? true : false;
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };
  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value }, () => {
      this.onValidation(name, value);
    });
  };
  render() {
    const { formErrors, isSubmitted } = this.state;
    console.log('(render) Component1');
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Credit Card Home Task</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="creditCardNumber">
              <label htmlFor="creditCardNumber">Credit Card Number</label>
              <input
                type="text"
                className={
                  !formErrors.creditCardNumber && isSubmitted
                    ? 'error'
                    : formErrors.creditCardNumber && !isSubmitted
                    ? ''
                    : ''
                }
                placeholder="0000 0000 0000 0000"
                noValidate
                name="creditCardNumber"
                onChange={this.handleChange}
              />
            </div>
            <div className="expDate">
              <label htmlFor="expDate">Expiration Date</label>
              <input
                type="text"
                className={
                  !formErrors.expirationDate && isSubmitted
                    ? 'error'
                    : formErrors.expirationDate && !isSubmitted
                    ? ''
                    : ''
                }
                placeholder="MM/YY"
                noValidate
                name="expirationDate"
                onChange={this.handleChange}
              />
            </div>

            <div className="cvv">
              <label htmlFor="cvv">CVV/CVC</label>
              <input
                type="text"
                className={
                  !formErrors.cvv && isSubmitted
                    ? 'error'
                    : formErrors.cvv && !isSubmitted
                    ? ''
                    : ''
                }
                placeholder="CVV/CVC"
                noValidate
                name="cvv"
                onChange={this.handleChange}
              />
            </div>

            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={
                  !formErrors.firstName && isSubmitted
                    ? 'error'
                    : formErrors.firstName && !isSubmitted
                    ? ''
                    : ''
                }
                placeholder="Your Name"
                noValidate
                name="firstName"
                onChange={this.handleChange}
              />
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className={
                  !formErrors.lastName && isSubmitted
                    ? 'error'
                    : formErrors.lastName && !isSubmitted
                    ? ''
                    : ''
                }
                placeholder="Your Surname"
                noValidate
                name="lastName"
                onChange={this.handleChange}
              />
            </div>

            <div className="secretQuestion">
              <label htmlFor="secretQuestion">Secret Question</label>
              <input
                type="text"
                className={
                  !formErrors.secretQuestion && isSubmitted
                    ? 'error'
                    : formErrors.secretQuestion && !isSubmitted
                    ? ''
                    : ''
                }
                placeholder="Your Secret Question"
                noValidate
                name="secretQuestion"
                onChange={this.handleChange}
              />
            </div>

            <div className="secretAnswer">
              <label htmlFor="secretAnswer">Secret Answer</label>
              <input
                type="text"
                className={
                  !formErrors.secretAnswer && isSubmitted
                    ? 'error'
                    : formErrors.secretAnswer && !isSubmitted
                    ? ''
                    : ''
                }
                placeholder="Your Secret Answer"
                noValidate
                name="secretAnswer"
                onChange={this.handleChange}
              />
            </div>

            <div className="submitButton">
              <button onClick={this.handleSubmit} type="submit">
                Submit
              </button>
            </div>
            <Component3
              creditCardNumber={this.state.creditCardNumber}
              onCardChange={this.updateCardType}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Component1;
