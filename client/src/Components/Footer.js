import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>Version : {this.props.version}</div>
    )
  }
}