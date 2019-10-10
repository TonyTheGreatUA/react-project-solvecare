/* eslint-disable */
//@flow

import React from 'react';
import './Component2.css';

type Props = {
  firstName: string,
  lastName: string,
  creditCardNumber: string,
  cardType: string,
  onFormValid: boolean,
};

type State = {
  isFormInfoVisibile: boolean,
  timer: boolean,
};
class Component2 extends React.Component<Props, State> {
  state = {
    isFormInfoVisibile: false,
    timer: false,
  };

  startFormTimer = () => {
    const timer = setTimeout(() => {
      this.setState({
        isFormInfoVisibile: false,
        timer: false,
      });
    }, 5000);

    this.setState({
      isFormInfoVisibile: true,
    });
  };
  componentDidUpdate = (prevProps: Props) => {
    if (
      prevProps.firstName === this.props.firstName &&
      prevProps.lastName === this.props.lastName &&
      prevProps.creditCardNumber === this.props.creditCardNumber &&
      prevProps.cardType === this.props.cardType
    ) {
      return;
    }
    this.startFormTimer();
  };
  render() {
    console.log('(render) Component2');
    const { firstName, lastName, creditCardNumber, cardType } = this.props;
    const { isFormInfoVisibile } = this.state;
    if (!isFormInfoVisibile || (!firstName && !lastName && !creditCardNumber && !cardType)) {
      return null;
    }
    if (!this.props.onFormValid) {
      return (
        <div className="wrapper">
          <div className="form-wrapper2">
            <span className="errorMsg">Opps! There is an error.</span>
          </div>
        </div>
      );
    }
    return (
      <div className="wrapper">
        <div className="form-wrapper2">
          <h1>Card Info</h1>
          <span className="cardInfo">First Name : {firstName}</span>
          <span className="cardInfo">Last Name : {lastName}</span>
          <span className="cardInfo">
            Credit Card : {creditCardNumber.substr(this.props.creditCardNumber.length - 4)}
          </span>
          <span className="cardInfo">Card Type : {cardType}</span>
        </div>
      </div>
    );
  }
}

export default Component2;
