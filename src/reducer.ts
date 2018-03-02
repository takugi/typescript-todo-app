import { Action } from 'redux'
import { Task } from './model/module'

export enum AppActionNames {
  ADD = 'todoApp/add',
  CHANGE_CHECK = 'todoApp/changeCheck',
  DELETE_FINISH_TASK = 'todoApp/finishTask'
}

interface AddTodoAction extends Action {
  type: AppActionNames.ADD,
  todo: string
}

interface ChangeCheckAction extends Action {
  type: AppActionNames.CHANGE_CHECK,
  id: number
}

interface DeleteFinishTaskAction extends Action {
  type: AppActionNames.DELETE_FINISH_TASK
}

export const addTodoAction = (todo: string): AddTodoAction => ({
  type: AppActionNames.ADD,
  todo: todo
})

export const changeCheckAction = (id: number): ChangeCheckAction => ({
  type: AppActionNames.CHANGE_CHECK,
  id: id
})

export const deleteFinishTaskAction = (): DeleteFinishTaskAction => ({
  type: AppActionNames.DELETE_FINISH_TASK
})

export type AppActions =
  | AddTodoAction
  | ChangeCheckAction
  | DeleteFinishTaskAction

export interface AppState {
  todoList: Task[]
}

const initialState: AppState = {
  todoList: []
}

// type Task = {
//
// }

// type Todos = { [string]: Task }
//
// {
//   "1": { id: "1", title: "", ... },
// }

export default function reducer(state: AppState = initialState, action: AppActions): AppState {
  switch (action.type) {
    case AppActionNames.ADD:
      let lastListId = state.todoList.length == 0 ? 0 : state.todoList[state.todoList.length - 1].getId()
      return { ...state, todoList: state.todoList.concat(new Task(lastListId + 1, action.todo)) }
    case AppActionNames.CHANGE_CHECK:
      let task : Task = state.todoList[action.id - 1]
      task.changeFinishChecked()
      let newTask : Task = new Task(task.getId(), task.getTitle(), task.getFinishChecked())
      let newChangeTodoList : Task[] = [...state.todoList]
      newChangeTodoList[task.getId() - 1] = newTask
      return { ...state, todoList: newChangeTodoList}
      // return { ...state, todoList: { ...state.todoList, [action.id]: newTask } }
    case AppActionNames.DELETE_FINISH_TASK:
      let newTodoList = state.todoList.filter((task: Task) => {
        return task.getFinishChecked() == false
      })
      return { ...state, todoList: newTodoList}
    default:
      return state
  }
}
