import { CHOOSE_SIDE } from '../actions/chooseSideActions'

const initialState = 0 // Default state is 0

const chooseSideReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHOOSE_SIDE:
      return action.payload
    default:
      return state
  }
}

export default chooseSideReducer
