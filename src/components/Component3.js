/* eslint-disable */
//@flow

import React from 'react';

type Props = {
  creditCardNumber: any,
  onCardChange: (v1: string) => void
}
type State = {
  cardType: string
}
class Component3 extends React.Component<Props, State> {
    state = {
      cardType: ''
    }
    
    componentDidMount = () =>{
      const {creditCardNumber} = this.props;
      this.setState({
        cardType: creditCardNumber.slice(12, 16) < 2000 ? "Visa" : "Master Card" 
      })
    }
  
    componentDidUpdate = (prevProps: Props) => {
      if (prevProps !== this.props) {
        return
      }
      const cardType = this.props.creditCardNumber.slice(12, 16) < 2000 ? "Visa" : "MasterCard"
      
      this.setState ({cardType})
      this.props.onCardChange(this.state.cardType)
    }
    
    render(){
      console.log('(render) Component3')
      return(
        <div>
        </div>
      )
    }
}

export default Component3;