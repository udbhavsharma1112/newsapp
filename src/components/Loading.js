import React, { Component } from 'react'
import loading from '/Users/udbhavsharma/Desktop/newsapp/src/components/loading.gif'
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}
