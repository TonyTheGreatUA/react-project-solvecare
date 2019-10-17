/* eslint-disable */
//@flow

import React from 'react';
import './Component1.css';
import Component3 from '../Component3/Component3';

import {
  faCreditCard,
  faUser,
  faCalendarAlt,
  faLock,
  faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const creditCardIcon = <FontAwesomeIcon icon={faCreditCard} />;
const nameIcon = <FontAwesomeIcon icon={faUser} />;
const expDateIcon = <FontAwesomeIcon icon={faCalendarAlt} />;
const cvvIcon = <FontAwesomeIcon icon={faLock} />;
const questionIcon = <FontAwesomeIcon icon={faQuestion} />;
var style = {
  width: 185,
};
var style2 = {
  width: 391,
};
const cardRegex = RegExp(/^[0-9]{16}$/);
const cvvRegex = RegExp(/^[0-9]{3,4}$/);
const expRegex = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/);

type Props = {
  creditCardNumber: string,
  expirationDate: string,
  cvv: string,
  firstName: string,
  lastName: string,
  secretQuestion: string,
  secretAnswer: string,
  setCreditCardNumber: (value: string) => void,
  setExpirationDate: (value: string) => void,
  setCVV: (value: string) => void,
  setFirstName: (value: string) => void,
  setLastName: (value: string) => void,
  setSecretQuestion: (value: string) => void,
  setSecretAnswer: (value: string) => void,
  onCreditCardNumberChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onCvvChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onExpirationDateChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onFirstNameChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onLastNameChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onSecretQuestionChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onSecretAnswerChange: (e: SyntheticEvent<HTMLInputElement>) => void,
};

type State = {};

class Component1 extends React.PureComponent<Props, State> {
  constructor() {
    super();

    this.onCreditCardNumberChange = this.onCreditCardNumberChange.bind(this);
    this.onCvvChange = this.onCvvChange.bind(this);
    this.onExpirationDateChange = this.onExpirationDateChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onSecretQuestionChange = this.onSecretQuestionChange.bind(this);
    this.onSecretAnswerChange = this.onSecretAnswerChange.bind(this);
  }
  onCreditCardNumberChange: () => void;
  onCreditCardNumberChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setCreditCardNumber(e.currentTarget.value);
  }
  onExpirationDateChange: () => void;
  onExpirationDateChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setExpirationDate(e.currentTarget.value);
  }
  onCvvChange: () => void;
  onCvvChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setCVV(e.currentTarget.value);
  }
  onFirstNameChange: () => void;
  onFirstNameChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setFirstName(e.currentTarget.value);
  }
  onLastNameChange: () => void;
  onLastNameChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setLastName(e.currentTarget.value);
  }
  onSecretQuestionChange: () => void;
  onSecretQuestionChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setSecretQuestion(e.currentTarget.value);
  }
  onSecretAnswerChange: () => void;
  onSecretAnswerChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setSecretAnswer(e.currentTarget.value);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Credit Card Home Task</h1>
          <form>
            <div className="creditCardNumber">
              <label htmlFor="creditCardNumber">Credit Card Number</label>
              <i className="icon">{creditCardIcon}</i>
              <input
                type="text"
                placeholder="0000 0000 0000 0000"
                name="creditCardNumber"
                required
                style={style2}
                value={this.props.creditCardNumber}
                onChange={this.onCreditCardNumberChange}
              />
            </div>
            <div className="expDate">
              <label htmlFor="expDate">Expiration Date</label>
              <i className="icon">{expDateIcon}</i>
              <input
                type="text"
                placeholder="MM/YY"
                name="expirationDate"
                required
                style={style}
                value={this.props.expirationDate}
                onChange={this.onExpirationDateChange}
              />
              <i className="far fa-credit-card"></i>
            </div>

            <div className="cvv">
              <label htmlFor="cvv">CVV/CVC</label>
              <i className="icon">{cvvIcon}</i>
              <input
                type="password"
                placeholder="CVV/CVC"
                name="cvv"
                required
                style={style}
                value={this.props.cvv}
                onChange={this.onCvvChange}
              />
            </div>

            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <i className="icon">{nameIcon}</i>
              <input
                type="text"
                placeholder="Your Name"
                name="firstName"
                required
                style={style}
                value={this.props.firstName}
                onChange={this.onFirstNameChange}
              />
            </div>

            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <i className="icon">{nameIcon}</i>
              <input
                type="text"
                placeholder="Your Surname"
                name="lastName"
                required
                style={style}
                value={this.props.lastName}
                onChange={this.onLastNameChange}
              />
            </div>

            <div className="secretQuestion">
              <label htmlFor="secretQuestion">Secret Question</label>
              <i className="icon">{questionIcon}</i>
              <input
                type="text"
                placeholder="Your Secret Question"
                name="secretQuestion"
                required
                style={style2}
                value={this.props.secretQuestion}
                onChange={this.onSecretQuestionChange}
              />
            </div>

            <div className="secretAnswer">
              <label htmlFor="secretAnswer">Secret Answer</label>
              <i className="icon">{questionIcon}</i>
              <input
                type="text"
                placeholder="Your Secret Answer"
                name="secretAnswer"
                required
                style={style2}
                value={this.props.secretAnswer}
                onChange={this.onSecretAnswerChange}
              />
            </div>

            <div className="submitButton">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Component1;
