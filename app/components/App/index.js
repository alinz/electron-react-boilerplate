import React, { Component } from 'react'

import styles from './styles.css'

export class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
