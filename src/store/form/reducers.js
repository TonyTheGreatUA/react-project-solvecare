/*eslint-disable*/
import {
  FORM_CHANGE_CREDIT_CARD_NUMBER,
  FORM_CHANGE_CVV,
  FORM_CHANGE_EXPIRATION_DATE,
  FORM_CHANGE_FIRST_NAME,
  FORM_CHANGE_LAST_NAME,
  FORM_CHANGE_SECRET_QUESTION,
  FORM_CHANGE_SECRET_ANSWER,
} from './actions';

const defaultState = {
  creditCardNumber: '',
  cvv: '',
  expirationDate: '',
  firstName: '',
  lastName: '',
  secretQuestion: '',
  secretAnswer: '',
  enteredWithError: '',
};

export const formReducer = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {
    case FORM_CHANGE_CREDIT_CARD_NUMBER:
      return { ...state, creditCardNumber: action.payload };
    case FORM_CHANGE_CVV:
      return { ...state, cvv: action.payload };
    case FORM_CHANGE_EXPIRATION_DATE:
      return { ...state, expirationDate: action.payload };
    case FORM_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case FORM_CHANGE_LAST_NAME:
      return { ...state, lastName: action.payload };
    case FORM_CHANGE_SECRET_QUESTION:
      return { ...state, secretQuestion: action.payload };
    case FORM_CHANGE_SECRET_ANSWER:
      return { ...state, secretAnswer: action.payload };
  }
  return state;
};
