import { Action } from 'redux'
import { Task } from './model/module'

export enum AppActionNames {
  ADD = 'todoApp/add'
}

interface AddTodoAction extends Action {
  type: AppActionNames.ADD,
  addTodo: Task
}

export const addTodoAction = (todo: Task): AddTodoAction => ({
  type: AppActionNames.ADD,
  addTodo: todo
})

export type AppActions =
  | AddTodoAction

export interface AppState {
  todoList: Task[]
}

const initialState: AppState = {
  todoList: []
}

export default function reducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionNames.ADD:
      return { ...state, todoList: state.todoList.concat(action.addTodo) }
    default:
      return state
  }
}
