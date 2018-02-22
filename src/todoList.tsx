import * as React from 'react'
import Todo from './todo'
import { Task } from './model/module'

type Props = {
  todoList: Task[]
}

export default function TodoList({ todoList }: Props) {
  return (
    <div>
      {todoList.map((todo: Task) => {
        return <Todo todo={ todo } />
      })}
    </div>
  )
}
