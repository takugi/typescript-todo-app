import * as React from 'react'
import * as ReactDOM from 'react-dom'
import store from './store'
import { Provider } from 'react-redux'
import TodoApp from './todoApp'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>
  , document.getElementById('root')
)
