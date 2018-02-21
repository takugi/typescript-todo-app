import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import todoApp, { AppActions, AppState } from './reducer'

const store = createStore(
  combineReducers({
    todoApp
  }),
  compose(
    applyMiddleware(logger)
  )
)

export default store;

export interface ReduxState {
  todoApp: AppState
}

export type ReduxAction =
  | AppActions

export interface Dispatch {
  (action: ReduxAction): any
}
