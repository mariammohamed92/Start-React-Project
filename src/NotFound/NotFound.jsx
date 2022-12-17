import React, { Component } from 'react'
import gf from '../imges/bubble-gum-error-404.gif'

export default class NotFound extends Component {
  render() {
    return (
      <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={gf} alt=""  className='w-75'/>
                </div>
                <div className="col-6">
                    <div className='mt-5 pt-5'>
                    <h1 className='fw-bolder ops'>Oops!</h1>
                    <h4 className='mt-4'>We can't seems to find the page <br/> you're looking for...</h4>
                    <h6 className='text-primary'>Error code:404</h6>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}
