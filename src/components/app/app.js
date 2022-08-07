import React from 'react'

import Header from '../header'
import Board from '../board'

export default class App extends React.Component {
    state = {

    }

    render() {
        return (
            <div>
                <Header />
                <Board />
            </div>
        )
    }
}