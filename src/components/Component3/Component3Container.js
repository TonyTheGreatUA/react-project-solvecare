/*eslint-disable*/
import React, { Component } from 'react';
import Component3 from './Component3';

export class Component3Container extends Component {
  render() {
    return (
      <Component3
        creditCardNumber={this.props.creditCardNumber}
        cardType={this.props.cardType}
        setCardType={this.props.setCardType}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    creditCardNumber: state.form.creditCardNumber,
    cardType: state.form.cardType,
  };
};

export default Component3Container;
