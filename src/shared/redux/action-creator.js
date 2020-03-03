export const SET_NAME = 'SET_NAME'

export function setName(payload) {
  return { type: SET_NAME, payload }
}

export const mapStateToProps = state => {
  return { name: state.globalReducer.name }
}

export const mapDispatchToProps = {
  setName
}
