import { Action } from 'redux'
import { Task } from './model/module'

export enum AppActionNames {
  ADD = 'todoApp/add',
  CHANGECHECK = 'todoApp/changeCheck'
}

interface AddTodoAction extends Action {
  type: AppActionNames.ADD,
  todo: string
}

interface ChangeCheckAction extends Action {
  type: AppActionNames.CHANGECHECK,
  index: number
}

export const addTodoAction = (todo: string): AddTodoAction => ({
  type: AppActionNames.ADD,
  todo: todo
})

export const changeCheckAction = (index: number): ChangeCheckAction => ({
  type: AppActionNames.CHANGECHECK,
  index: index
})

export type AppActions =
  | AddTodoAction
  | ChangeCheckAction

export interface AppState {
  todoList: Task[]
}

const initialState: AppState = {
  todoList: []
}

export default function reducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionNames.ADD:
      return { ...state, todoList: state.todoList.concat(new Task(action.todo)) }
    case AppActionNames.CHANGECHECK:
      let task : Task = state.todoList[action.index]
      task.changeFinishChecked()
      return { ...state, todoList: state.todoList}
    default:
      return state
  }
}
