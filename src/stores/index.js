import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { DEV } from '../config'

// reducers
import UserReducer from './reducers/user'
import ErrorsReducer from './reducers/errors'
import FeaturesReducer from './reducers/features'
import BookReducer from './reducers/book'

const rootReducer = combineReducers({
  user: UserReducer,
  errors: ErrorsReducer,
  features: FeaturesReducer,
  book: BookReducer,
})

let enhancer

if (DEV) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  enhancer = composeEnhancers(applyMiddleware(thunk))
} else {
  enhancer = applyMiddleware(thunk)
}

const store = createStore(rootReducer, enhancer)

export default store
