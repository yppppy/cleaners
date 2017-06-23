import { combineReducers } from 'redux'  
import reduceNum from './reduceNum.js'  
import reduceText from './reduceText.js'  
  
const todoApp = combineReducers({  
  reduceNum,  
  reduceText  
})  
  
export default todoApp  
