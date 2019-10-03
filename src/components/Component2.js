import React from 'react';
import '../styles/Component2View.css';
import PropTypes from 'prop-types';

class Component2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isFormInfoVisibile: false
        } 
    }
    
    startFormTimer = () =>{
      const timer = setTimeout(() => {
        this.setState({
          isFormInfoVisibile: false,
          timer: false
        })
      }, 5000);
  
      this.setState({
        isFormInfoVisibile: true,
        timer,
      })
    } 
    componentDidUpdate = (prevProps) => {
      if( prevProps.firstName === this.props.firstName &&
          prevProps.lastName === this.props.lastName &&
          prevProps.creditCardNumber === this.props.creditCardNumber &&
          prevProps.cardType === this.props.cardType){
            return;
          }
      this.startFormTimer();
    }
    render(){
      const {firstName, lastName, creditCardNumber, cardType} = this.props;
      const {isFormInfoVisibile} = this.state;
      if(!isFormInfoVisibile || (!firstName && !lastName && !creditCardNumber && !cardType)){
        return null;
      }
      return(
        <div className="wrapper">
          <div className="form-wrapper2">
            <span>Card Info</span>
            <span className="cardError">Error</span>
            <span className="cardInfo">First Name : {firstName}</span>
            <span className="cardInfo">Last Name : {lastName}</span>
            <span className="cardInfo">Credit Card : {(creditCardNumber).substr(this.props.creditCardNumber.length - 4)}</span>
            <span className="cardInfo">Card Type : {cardType}</span>
          </div>
        </div>
      );
    }
}

export default Component2;