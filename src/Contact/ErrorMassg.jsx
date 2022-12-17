import React, { Component } from 'react'

export default class ErrorMassg extends Component {
  render() {
    let massge=this.props.msg;
    let valid=this.props.valide;
    
    return (
      <>
       <p className={`text-danger ${valid?"d-block":" d-none"} text-start`}> <span  className='bolder me-1'>&#x2022;</span>{massge}</p>
      </>
    )
  }
}
