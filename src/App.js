import React, { Component } from 'react'
import List from './Components/List'
import Form from './Components/Form'

class App extends Component {
  state = { items: [] };

  removeCharacter = index => {
    const { items } = this.state

    this.setState({
      items: items.filter((character, i) => {
        return i !== index
      })
    })
  }

  handleSubmit = item => {
    if (item.item.trim() === '') {
      alert("Please type something...")
    }
    else {
      this.setState({ items: [item,...this.state.items] })
    }

  }

  render() {
    return (
      <div>
        <div className="page1">
          <p className="heading">callStack</p>
          <div>
            <div className="content">
              <div className="fieldbox">
                <Form handleSubmit={this.handleSubmit} />
              </div>
            </div>
          </div>
        </div>
        <div className="page2">
          <div className="todoData">
            <ul className="stack">
              <List characterData={this.state.items} removeCharacter={this.removeCharacter} />
            </ul>
          </div>
          <div className="panel">
          <button className="panelbt">callStack</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
