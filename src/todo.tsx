import * as React from 'react'
import { Task } from './model/module'

type Props = {
  todo: Task
}

export default function Todo({ todo }: Props) {
  return <div>{ todo.title }</div>
}
