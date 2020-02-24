import React, { Component } from 'react'
import './index.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            item: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { item, value } = event.target

        this.setState({
            item: value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const { item } = this.state;

        return (
            <form>
                <input type="text" className="field" name="item" value={item} onChange={this.handleChange} placeholder="What needs to be done?" required />
                <input type="button" className="submit" value="Push" onClick={this.submitForm} />
		<textarea rows="35" columns="300" className="code"/>
            </form>
        );
    }

}

export default Form;
