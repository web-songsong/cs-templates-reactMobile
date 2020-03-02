import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

export default class Home extends React.Component<RouteComponentProps, any> {
  render() {
    return (
      <div
        onClick={() => {
          console.log(this.props.history)
        }}>
        home
      </div>
    )
  }
}
