import * as React from 'react'
import Todo from './todo'
import { Task } from './model/module'

type Props = {
  todoList: Task[],
  onChangeFinishChecked: (index: number) => any
}

export default function TodoList({ todoList, onChangeFinishChecked }: Props) {
  return (
    <div>
      {todoList.map((task: Task, index: number) => {
        return <Todo task={task} index={index} onChangeFinishChecked={(id) => onChangeFinishChecked(id)} />
      })}
    </div>
  )
}
