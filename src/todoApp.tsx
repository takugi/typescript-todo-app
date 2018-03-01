import * as React from 'react'
import { connect, MapStateToPropsParam } from 'react-redux'
import { ReduxState, Dispatch } from './store'
import { addTodoAction, changeCheckAction } from './reducer'
import { Task } from './model/module'
import AddTodo from './addTodo'
import TodoList from './todoList'

type PropsFromDispatch = {
  dispatch: Dispatch
}

type PropsFromState = {
  todoList: Task[]
}

type Props = PropsFromState & PropsFromDispatch

class TodoApp extends React.Component<Props, {}> {

  addTodoClick(todo: string) {
    this.props.dispatch(addTodoAction(todo))
  }

  changeFinishChecked(index: number) {
    this.props.dispatch(changeCheckAction(index))
  }

  render() {
    return <>
      <AddTodo onSubmit={(todo) => this.addTodoClick(todo)} />
      <TodoList todoList={this.props.todoList} onChangeFinishChecked={(index) => this.changeFinishChecked(index)} />
    </>
  }
}

const select: MapStateToPropsParam<PropsFromState, {}, {}> =
  (state: ReduxState) => ({ todoList: state.todoApp.todoList })

export default connect(select)(TodoApp)
