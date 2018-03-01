import * as React from 'react'
import { Task } from './model/module'

type Props = {
  task: Task,
  index: number,
  onChangeFinishChecked: (index: number) => any
}

export default class Todo extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props)
  }

  handleChangeFinishChecked() {
    this.props.onChangeFinishChecked(this.props.index)
  }

  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.handleChangeFinishChecked.bind(this) } checked={this.props.task.finishChecked ? "checked" : null} />
        <span>{ this.props.task.title }</span>
      </div>
    )
  }
}
