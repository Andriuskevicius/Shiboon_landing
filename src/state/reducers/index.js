import { combineReducers } from 'redux'
import chooseSideReducer from './chooseSideReducer'

const rootReducer = combineReducers({
  chooseSide: chooseSideReducer
})

export default rootReducer
