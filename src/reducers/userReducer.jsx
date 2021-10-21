const initialState = {
  name: 'Visitante',
  counter: 0,
}
const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      let obj = { ...state, name: action.payload.name }
      return obj
    case 'INCREMENT_COUNTER':
      let newCount = state.counter++
      return { ...state, couter: newCount }

    default:
      break
  }

  return state
}

export default UserReducer
