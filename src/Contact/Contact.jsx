import React, { Component } from 'react'
import ErrorMassg from './ErrorMassg'
import {Helmet} from "react-helmet";

export default class Contact extends Component {
    state={
        errorMsg: {nameMassg:"Please enter your name.",
         emailMassg:"Please enter your email address.",
         phoneMassg:"Please enter your phone number.",
         massge:"Please enter a message",
         validEmail:"Not a valid email address"},
         nameInpt:"",
         emailInpt:"",
         telInpt:"",
         msgInpt:"",
         nameValid:false,
         emailValid:false,
         telValid:false,
         msgValid:false
    }
    validateEmpty=(value)=>{
        if(value===""){
            return true;
        }
        return false;
    }
    validateClick=()=>{
        this.setState({nameValid:this.validateEmpty(this.state.nameInpt)})
        console.log(this.state.nameValid)
        this.setState({emailValid:this.validateEmpty(this.state.emailInpt)})
        console.log(this.state.emailValid)
        this.setState({telValid:this.validateEmpty(this.state.telInpt)})
        console.log(this.state.telValid)
        this.setState({msgValid:this.validateEmpty(this.state.msgInpt)})
        console.log(this.state.msgValid)
    }

  render() {
    return (
        <>
        <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>Start React</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="caontainer w-75 m-auto mt-5">
                <div className="row">
                    <div className='col-lg-8 mx-auto'>
                    <form>
                <div className="form-group pb-2">
                    <label style={{opacity:this.state.nameInpt===""?"0":"1"}}>Name</label>
                    <input type="text" onChange={(e)=>{
                        this.setState({nameInpt:e.target.value});
                        }}  className='form-control' placeholder='Name' data-validation-required-message="Please enter your name." required />
                    <ErrorMassg msg={this.state.errorMsg.nameMassg} valide={this.state.nameValid}  />
                </div>
                <div className="form-group pb-2">
                    <label style={{opacity:this.state.emailInpt===""?"0":"1"}}>Email</label>
                    <input type="email" onChange={(e)=>{
                        this.setState({emailInpt:e.target.value});
                        }}  className='form-control' placeholder='Email Address' data-validation-required-message="Please enter your email address." required />
                    <ErrorMassg msg={this.state.errorMsg.emailMassg} valide={this.state.emailValid}  />
                </div>
                <div className="form-group pb-2">
                    <label style={{opacity:this.state.telInpt===""?"0":"1"}} className="ms-5">Phone Number</label>
                    <input type="tel" onChange={(e)=>{
                        this.setState({telInpt:e.target.value});
                        }}  className='form-control' placeholder='Phone Number' data-validation-required-message="Please enter your phone." required />
                    <ErrorMassg msg={this.state.errorMsg.phoneMassg} valide={this.state.telValid}  />
                </div>
                <div className="form-group pb-2">
                    <label style={{opacity:this.state.msgInpt===""?"0":"1"}}>Message</label>
                    <textarea onChange={(e)=>{
                        this.setState({msgInpt:e.target.value});
                        }}  className='form-control' placeholder='Message'  cols="30" rows="5" data-validation-required-message="Please enter your massage." required />
                    <ErrorMassg msg={this.state.errorMsg.massge} valide={this.state.msgValid}  />
                </div>
                <br />
                <div className="form-btn d-flex justify-content-left">
                    <button type='submit' className='btn btn-primary' onClick={this.validateClick}>Send</button>
                </div>
            </form>
                    </div>
                </div>
            </div>
        </>
    )
  }
}
