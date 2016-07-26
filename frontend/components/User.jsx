import React from 'react'

export default class User extends React.Component {
  render() {
    const { name } = this.props
    return(
      <div className='ib user'>
        <p>Привет, {name}!</p>
      </div>
    )
  }
}
