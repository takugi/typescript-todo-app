import * as React from 'react'

type PropsFromState = {
  onSubmit: (todo: string) => any
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
    this.props.onSubmit(this.state.inputTodo)
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
