import axios from 'axios'
// redux thunk to return function -- dispatch

export const fetchSpaceX = () => async (dispatch) => {
  dispatch({ type: 'FETCH_SPACEX_REQUEST' })
  // change isFetching: true (to show loading spinner)

  // call API
  const result = await axios.get('https://api.spacexdata.com/v3/launches/latest')
  const { data } = result

  return dispatch({
    type: 'FETCH_SPACEX_SUCCESS',
    payload: data,
  })

  // set payload
}

export default fetchSpaceX
