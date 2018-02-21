import * as React from 'react'
import { connect, MapStateToPropsParam } from 'react-redux'
import { ReduxState, Dispatch } from './store'
import { addTodoAction } from './reducer'
import AddTodo from './addTodo'
import TodoList from './todoList'

type PropsFromDispatch = {
  dispatch: Dispatch
}

type PropsFromState = {
  todoList: string[]
}

type Props = PropsFromState & PropsFromDispatch

class TodoApp extends React.Component<Props, {}> {

  addTodoClick(todo: string) {
    console.log(this.props.todoList)
    this.props.dispatch(addTodoAction(todo))
  }

  render() {
    return <>
      <AddTodo onSubmit={(todo) => this.addTodoClick(todo)} />
      <TodoList todoList={this.props.todoList} />
    </>
  }
}

const select: MapStateToPropsParam<PropsFromState, {}, {}> =
  (state: ReduxState) => ({ todoList: state.todoApp.todoList })

export default connect(select)(TodoApp)
