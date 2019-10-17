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
  //   updateData: (
  //     firstName: string,
  //     lastName: string,
  //     creditCardNumber: string,
  //     cardType: string,
  //     onFormValid: boolean,
  //   ) => void,
  onCreditCardNumberChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onCvvChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onExpirationDateChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onFirstNameChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onLastNameChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onSecretQuestionChange: (e: SyntheticEvent<HTMLInputElement>) => void,
  onSecretAnswerChange: (e: SyntheticEvent<HTMLInputElement>) => void,
};

type State = {
  //   cardType: string,
  //   creditCardNumber: string,
  //   formErrors: {
  //     firstName: boolean,
  //     lastName: boolean,
  //     cvv: boolean,
  //     expirationDate: boolean,
  //     secretQuestion: boolean,
  //     secretAnswer: boolean,
  //     creditCardNumber: boolean,
  //   },
  //   firstName: string,
  //   lastName: string,
  //   cvv: string,
  //   expirationDate: string,
  //   secretQuestion: string,
  //   secretAnswer: string,
  //   onFormValid: boolean,
  //   isSubmitted: boolean,
};

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
  onCreditCardNumberChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setCreditCardNumber(e.target.value);
  }
  onExpirationDateChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setExpirationDate(e.target.value);
  }
  onCvvChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setCVV(e.target.value);
  }
  onFirstNameChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setFirstName(e.target.value);
  }
  onLastNameChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setLastName(e.target.value);
  }
  onSecretQuestionChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setSecretQuestion(e.target.value);
  }
  onSecretAnswerChange(e: SyntheticEvent<HTMLInputElement>) {
    this.props.setSecretAnswer(e.target.value);
  }

  // state = {
  //   creditCardNumber: '',
  //   cvv: '',
  //   expirationDate: '',
  //   firstName: '',
  //   lastName: '',
  //   secretQuestion: '',
  //   secretAnswer: '',
  //   enteredWithError: '',
  //   cardType: '',
  //   onFormValid: false,
  //   isSubmitted: false,
  //   formErrors: {
  //     creditCardNumber: false,
  //     expirationDate: false,
  //     cvv: false,
  //     firstName: false,
  //     lastName: false,
  //     secretQuestion: false,
  //     secretAnswer: false,
  //   },
  // };

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
            {/* <Component3
              creditCardNumber={this.state.creditCardNumber}
              onCardChange={this.updateCardType}
            /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Component1;
