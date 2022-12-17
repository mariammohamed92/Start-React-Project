import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <> 
      <footer className='mt-5 '>
 <div className="detail">
 <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className='text-uppercase mb-4'>Location</h4>
                    <p>2215 John Daniel Drive <br/> Clark, MO 65243</p>
                </div>
                <div className='col-lg-4 mb-5 mb-lg-0'>
                    <h4 className='text-uppercase mb-4'>Around the Web</h4>
                    <div className="socil d-flex justify-content-center">
                      <div className='icn mx-1'><i className="fa-brands fa-facebook-f"></i></div>
                      <div className='icn mx-1'><i className="fa-brands fa-twitter"></i></div>
                      <div className='icn mx-1'><i className="fa-brands fa-linkedin-in"></i></div>
                      <div className='icn mx-1'><i className="fa-brands fa-dribbble"></i></div>
                    </div>
                </div>
                <div className='col-lg-4 mb-5 mb-lg-0'>
                    <h4 className='text-uppercase mb-4'>About Freelancer</h4>
                    <p className='lead'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
 </div>
        <div className='copy-right py-4 text-center text-white'>
        <div className="container">
          <small>Copyright © Your Website 2021</small>
        </div>
      </div>
      </footer>

        </>
    )
  }
}
