import { createStore, applyMiddleware } from 'redux'
import reduxLogger from 'redux-logger'
import reduxThunk from 'redux-thunk'
import reducers from '../reducers'

const store = createStore(reducers, applyMiddleware(reduxThunk, reduxLogger))

export default store
