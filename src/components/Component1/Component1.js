/* eslint-disable */
//@flow

import React from 'react';
import './Component1View.css';
import Component3 from '../Component3';

const cardRegex = RegExp(/^[0-9]{16}$/);
const cvvRegex = RegExp(/^[0-9]{3,4}$/);
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);
type Props = {
  updateData: (
    firstName: string,
    lastName: string,
    creditCardNumber: string,
    cardType: string,
  ) => void,
};

type State = {
  cardType: string,
  creditCardNumber: string,
  formErrors: {
    firstName: string,
    lastName: string,
    cvv: string,
    expirationDate: string,
    secretQuestion: string,
    secretAnswer: string,
    creditCardNumber: string,
  },
  firstName: string,
  lastName: string,
  cvv: string,
  expirationDate: string,
  secretQuestion: string,
  secretAnswer: string,
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
    formErrors: {
      creditCardNumber: '',
      expirationDate: '',
      cvv: '',
      firstName: '',
      lastName: '',
      secretQuestion: '',
      secretAnswer: '',
    },
  };

  updateCardType = (cardType: string) => {
    this.setState({
      cardType: cardType,
    });
  };

  handleSubmit = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.props.updateData(
      this.state.firstName,
      this.state.lastName,
      this.state.creditCardNumber,
      this.state.cardType,
    );
  };

  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'firstName':
        formErrors.firstName = value.length < 3 ? 'minimum 3 characaters required' : '';
        break;
      case 'lastName':
        formErrors.lastName = value.length < 3 ? 'minimum 3 characaters required' : '';
        break;
      case 'secretQuestion':
        formErrors.secretQuestion = value.length < 10 ? 'minimum 10 characaters required' : '';
        break;
      case 'secretAnswer':
        formErrors.secretAnswer = value.length < 10 ? 'minimum 10 characaters required' : '';
        break;
      case 'creditCardNumber':
        formErrors.creditCardNumber = cardRegex.test(value) ? '' : 'invalid card number';
        break;
      case 'cvv':
        formErrors.cvv = cvvRegex.test(value) ? '' : 'invalid CVV/CVC';
        break;
      case 'expirationDate':
        formErrors.expirationDate = expRegex.test(value) ? '' : 'invalid MM/YY';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };
  render() {
    const { formErrors } = this.state;
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
                className={formErrors.creditCardNumber.length > 0 ? 'error' : null}
                placeholder="0000 0000 0000 0000"
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
                className={formErrors.expirationDate.length > 0 ? 'error' : null}
                placeholder="MM/YY"
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
                className={formErrors.cvv.length > 0 ? 'error' : null}
                placeholder="CVV/CVC"
                noValidate
                name="cvv"
                onChange={this.handleChange}
              />
              {formErrors.cvv.length > 0 && <span className="errorMessage">{formErrors.cvv}</span>}
            </div>

            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className={formErrors.firstName.length > 0 ? 'error' : null}
                placeholder="Your Name"
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
                className={formErrors.lastName.length > 0 ? 'error' : null}
                placeholder="Your Surname"
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
                className={formErrors.secretQuestion.length > 0 ? 'error' : null}
                placeholder="Your Secret Question"
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
                className={formErrors.secretAnswer.length > 0 ? 'error' : null}
                placeholder="Your Secret Answer"
                noValidate
                name="secretAnswer"
                onChange={this.handleChange}
              />
              {formErrors.secretAnswer.length > 0 && (
                <span className="errorMessage">{formErrors.secretAnswer}</span>
              )}
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
