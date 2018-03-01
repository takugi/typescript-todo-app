import * as React from 'react'
import Todo from './todo'
import { Task } from './model/module'

type Props = {
  todoList: Task[],
  onChangeFinishChecked: (id: number) => any
}

export default function TodoList({ todoList, onChangeFinishChecked }: Props) {
  return (
    <div>
      {todoList.map((task: Task) => {
        return <Todo task={task} id={task.getId()} onChangeFinishChecked={(id) => onChangeFinishChecked(id)} />
      })}
    </div>
  )
}
