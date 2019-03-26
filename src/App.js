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
      }),
    })
  }

  handleSubmit = item => {
    if(item.item.trim()==='')
    {
      alert("Please type something...")
    }
    else
    {
      this.setState({ items: [...this.state.items, item] })
    }
    
  }

  render() {
    return (
      <div className="page">
        <p className="heading">todos</p>
        <div>
          <div className="content">
            <div className="fieldbox">
              <Form handleSubmit={this.handleSubmit} />
            </div>
            <div className="todoData">
              <ul>
                <List characterData={this.state.items} removeCharacter={this.removeCharacter} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;