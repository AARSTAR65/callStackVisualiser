import React, { Component } from 'react'
import ListData from '../Components/ListData'
import './index.css'

class List extends Component {
    render() {
        const { characterData, removeCharacter } = this.props

        return (
            <ul>
                <ListData characterData={characterData} removeCharacter={removeCharacter} />
            </ul>
        )
    }
}

export default List
