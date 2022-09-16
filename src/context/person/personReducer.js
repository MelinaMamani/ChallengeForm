import {
    RESET_STATE,
    SET_NAME,
    SET_LAST_NAME,
    SET_EMAIL,
    SET_AGE,
    SET_IMAGE
  } from './types';
  
  import { initialState } from './PersonState';
  
  const personReducer = (state, action) => {
    switch (action.type) {
      case RESET_STATE:
        return initialState
  
      case SET_NAME:
        return {
          ...state,
          name: action.payload,
        }
  
      case SET_LAST_NAME:
        return {
          ...state,
          lastName: action.payload,
        }
  
      case SET_EMAIL:
        return {
          ...state,
          email: action.payload,
        }
  
      case SET_AGE:
        return {
          ...state,
          age: action.payload,
        }

      case SET_IMAGE:
        return {
          ...state,
          image: action.payload,
        }
      
      default:
        return state
    }
  }
  
  export default personReducer
  