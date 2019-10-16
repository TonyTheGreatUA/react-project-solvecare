/*eslint-disable*/
import React, { Component } from 'react';
import Component1 from './Component1';
import { connect } from 'react-redux';
import {
  setCreditCardNumber,
  setCVV,
  setExpirationDate,
  setFirstName,
  setLastName,
  setSecretQuestion,
  setSecretAnswer,
} from '../../store/form/actions';
class Component1Container extends Component {
  render() {
    return (
      <Component1
        creditCardNumber={this.props.creditCardNumber}
        cvv={this.props.cvv}
        expirationDate={this.props.expirationDate}
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        secretQuestin={this.props.secretQuestin}
        secretAnswer={this.props.secretAnswer}
        setCrediCardNumber={this.props.setCreditCardNumber}
        setCVV={this.props.setCVV}
        setExpirationDate={this.props.setExpirationDate}
        setFirstName={this.props.setFirstName}
        setLastName={this.props.setLastName}
        setSecretQuestion={this.props.setSecretQuestion}
        setSecretAnswer={this.props.setSecretQuestion}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    creditCardNumber: state.form.creditCardNumber,
    cvv: state.form.cvv,
    expirationDate: state.form.expirationDate,
    firstName: state.form.firstName,
    lastName: state.form.lastName,
    secretQuestion: state.form.secretQuestion,
    secretAnswer: state.form.secretAnswer,
  };
};
const mapDispatchToProps = {
  setCreditCardNumber,
  setCVV,
  setExpirationDate,
  setFirstName,
  setLastName,
  setSecretQuestion,
  setSecretAnswer,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component1Container);
