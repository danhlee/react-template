import { SET_NAME } from './action-creator'

const initialState = {}

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      return Object.assign({}, state, {
        name: action.payload
      })
  }
}

export default globalReducer
