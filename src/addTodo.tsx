import * as React from 'react'
import { Task } from './model/module'

type PropsFromState = {
  onSubmit: (todo: Task) => any
}

type Props = PropsFromState

type State = {
  inputTodo: string
}

export default class AddTodo extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state = {
      inputTodo: ""
    }
  }

  changeInputText(e: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      inputTodo: e.currentTarget.value
    })
  }

  handleAddSubmit() {
    this.props.onSubmit(new Task(this.state.inputTodo))
  }

  render() {
    return (
      <div>
        <input placeholder="todo name" onChange={this.changeInputText.bind(this)} />
        <button onClick={this.handleAddSubmit.bind(this)}>add</button>
      </div>
    )
  }
}
