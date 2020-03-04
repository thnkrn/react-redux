import { combineReducers } from 'redux'
import spaceXReducers from './spacex'

const reducers = combineReducers({
  spacex: spaceXReducers,
})

export default reducers
