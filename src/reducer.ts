import { Action } from 'redux'

export enum AppActionNames {
  ADD = 'todoApp/add'
}

interface AddTodoAction extends Action {
  type: AppActionNames.ADD,
  addTodo: string
}

export const addTodoAction = (todo: string): AddTodoAction => ({
  type: AppActionNames.ADD,
  addTodo: todo
})

export type AppActions =
  | AddTodoAction

export interface AppState {
  todoList: string[]
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
