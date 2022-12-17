import React, { Component } from 'react'

export default class Card extends Component {
  render() {
    let{id ,name ,img}=this.props.lay;
    return (
      <>
         {/* <div className='col-md-6 col-lg-4 mb-5'>
         <div className="img-contain">
                            <img src={img} alt="" className='w-100 rounded' />
                            <div className="lyer">
                            <i className="fa-solid fa-plus fa-3x"></i>
                            </div>
                        </div>

         </div> */}
            </>
    )
  }
}
