import * as React from 'react'
import Todo from './todo'

type Props = {
  todoList: string[]
}

export default function TodoList({ todoList }: Props) {
  return (
    <div>
      {todoList.map((todo: string) => {
        return <Todo todo={ todo } />
      })}
    </div>
  )
}
