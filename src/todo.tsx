import * as React from 'react'
import { Task } from './model/module'

type Props = {
  task: Task,
  id: number,
  onChangeFinishChecked: (id: number) => any
}

export default class Todo extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props)
  }

  handleChangeFinishChecked() {
    this.props.onChangeFinishChecked(this.props.id)
  }

  render() {
    console.log(this.props.task.getFinishChecked());
    return (
      <div>
        <input type="checkbox" onChange={this.handleChangeFinishChecked.bind(this) } checked={this.props.task.getFinishChecked() ? "checked" : null} />
        <span>{ this.props.task.getTitle() }</span>
      </div>
    )
  }
}
