const initialState = { isFetching: false, payload: {} }

const spaceXReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SPACEX_REQUEST':
      return { ...state, isFetching: true }
    case 'FETCH_SPACEX_SUCCESS':
      return { ...state, isFetching: false, payload: action.payload }
    default:
      return state
  }
}

export default spaceXReducers
