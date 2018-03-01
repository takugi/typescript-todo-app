import * as React from 'react'
import { connect, MapStateToPropsParam } from 'react-redux'
import { ReduxState, Dispatch } from './store'
import { addTodoAction, changeCheckAction, deleteFinishTaskAction } from './reducer'
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

  changeFinishChecked(id: number) {
    this.props.dispatch(changeCheckAction(id))
  }

  deleteFinishTask() {
    this.props.dispatch(deleteFinishTaskAction())
  }

  render() {
    return <>
      <AddTodo onSubmit={(todo) => this.addTodoClick(todo)} />
      <button onClick={this.deleteFinishTask.bind(this)}>finishDelete</button>
      <TodoList todoList={this.props.todoList} onChangeFinishChecked={(id) => this.changeFinishChecked(id)} />
    </>
  }
}

const select: MapStateToPropsParam<PropsFromState, {}, {}> =
  (state: ReduxState) => ({ todoList: state.todoApp.todoList })

export default connect(select)(TodoApp)
