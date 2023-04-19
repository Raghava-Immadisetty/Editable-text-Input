import {Component} from 'react'

import './index.css'

class EditableTextInput extends Component {
  state = {isTrue: false, inputValue: ''}

  onClicking = () => {
    this.setState({isTrue: true})
  }

  onChanging = event => {
    this.setState({inputValue: event.target.value})
  }

  inputRender = () => {
    const {inputValue} = this.state
    return (
      <div>
        <input type="text" value={inputValue} onChange={this.onChanging()} />
      </div>
    )
  }

  saveRender = () => {
    const {inputValue} = this.state
    return (
      <div>
        <h1>{inputValue}</h1>
      </div>
    )
  }

  render() {
    const {isTrue} = this.state
    const text = isTrue ? 'Save' : 'Edit'

    return (
      <div>
        <div>
          <div>
            <h1>Editable Text Input</h1>
            <div>
              {isTrue ? this.inputRender() : this.saveRender()}
              <button type="button" onClick={this.onClicking()}>
                {text}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
