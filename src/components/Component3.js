import React from 'react';
import PropTypes from 'prop-types';

class Component3 extends React.PureComponent {
    constructor(props){
      super(props);
      this.state = {
        cardType: ""
      };
    }
    
    componentDidMount = () =>{
      const {creditCardNumber} = this.props;
      this.setState({
        cardType: creditCardNumber.slice(12, 16) < 2000 ? "Visa" : "Master Card" 
      })
    }
  
    componentDidUpdate = (prevProps) => {
      const { creditCardNumber} = this.props;
  
      if (prevProps !== this.props) {
        this.setState ({
          cardType: creditCardNumber.slice(15, 19) < 2000 ? "Visa" : "MasterCard"
        }, () =>{
            this.props.onCardChange(this.state.cardType);
        })
      }
    }
    
    render(){
      return(
        <div>
        </div>
      )
    }
}
Component3.propTypes = {
    creditCardNumber: PropTypes.string,
    onCardChange: PropTypes.func
}
Component3.defaultProps = {
    creditCardNumber: "0000 0000 0000 0000"
}

export default Component3;