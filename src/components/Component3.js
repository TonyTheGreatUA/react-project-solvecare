/* eslint-disable */
//@flow

import React from 'react';

type Props = {
  creditCardNumber: string,
  onCardChange: (cardType: string) => void,
};
type State = {
  cardType: string,
};
class Component3 extends React.Component<Props, State> {
  state = {
    cardType: '',
  };

  componentDidMount = () => {
    const { creditCardNumber } = this.props;
    this.setState({
      cardType: creditCardNumber && +creditCardNumber.slice(12, 16) < 2000 ? 'Visa' : 'Master Card',
    });
  };

  componentDidUpdate = (prevProps: Props) => {
    const { creditCardNumber } = this.props;
    if (prevProps !== this.props) {
      return;
    }
    const cardType =
      creditCardNumber && +creditCardNumber.slice(12, 16) < 2000 ? 'Visa' : 'MasterCard';

    this.setState({ cardType });
    this.props.onCardChange(this.state.cardType);
  };

  render() {
    console.log('(render) Component3');
    return <div></div>;
  }
}

export default Component3;
