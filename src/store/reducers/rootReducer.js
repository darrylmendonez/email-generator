import authReducer from './authReducer'
import emailReducer from './emailReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  email: emailReducer,
  firestore: firestoreReducer
});

export default rootReducer