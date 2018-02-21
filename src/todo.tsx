import * as React from 'react'

type Props = {
  todo: string
}

export default function Todo({ todo }: Props) {
  return <div>Todo: { todo }</div>
}
