import { useReducer } from 'react';
import personContext from './personContext';
import personReducer from './personReducer';
import {
  RESET_STATE,
  SET_NAME,
  SET_LAST_NAME,
  SET_EMAIL,
  SET_AGE,
  SET_IMAGE
} from './types';

export const initialState = {
    name: null,
    lastName: null,
    email: null,
    age: 0,
    image: null,
}

const PersonState = (props) => {
    const [state, dispatch] = useReducer(personReducer, initialState);
  
    const resetState = () => {
      dispatch({
        type: RESET_STATE,
      })
    }
  
    const setName = (name) => {
      dispatch({
        type: SET_NAME,
        payload: name,
      })
    }
  
    const setLastName = (lastName) => {
      dispatch({
        type: SET_LAST_NAME,
        payload: lastName,
      })
    }
  
    const setEmail = (email) => {
      dispatch({
        type: SET_EMAIL,
        payload: email,
      })
    }

    const setAge = (age) => {
      dispatch({
        type: SET_AGE,
        payload: age,
      })
    }
  
    const setImage = (image) => {
      dispatch({
        type: SET_IMAGE,
        payload: image,
      })
    }
  
    return (
      <personContext.Provider
        value={{
          personState: state,
          setName,
          setLastName,
          setEmail,
          setAge,
          setImage,
          resetState,
        }}
      >
        {props.children}
      </personContext.Provider>
    )
  }
  
  export default PersonState;