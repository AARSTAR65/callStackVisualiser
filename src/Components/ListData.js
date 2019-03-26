import React, { Component } from 'react'
import './index.css'

class ListData extends Component {

    render() {
        const { characterData, removeCharacter } = this.props

        var strikefunc = function strikefunc(event) {
            var el = event.target.nextSibling;
            console.log(el);
            if (el.classList === "textc") {
                el.classList.toggle("text");
            }
            else {
                el.classList.toggle("textc");
            }
        }

        const rows = characterData.map((row, index) => {
            return (
                <li key={index} className="row">
                    <label className="container2">
                        <input type="checkbox" onClick={(e) => strikefunc(e)} />
                        <span className="text">{row.item}</span>
                        <span className="checkmark"></span>
                    </label>
                    <button className="delete" onClick={() => removeCharacter(index)}>Delete</button>
                </li>
            )
        })

        return <lData>{rows}</lData>
    }
}

export default ListData