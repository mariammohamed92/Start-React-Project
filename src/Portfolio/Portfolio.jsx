import React, { Component } from 'react'
import cabin from '../imges/cabin.png'
import cake from '../imges/cake.png'
import circus from '../imges/circus.png'
import game from '../imges//game.png'
import safe from '../imges/safe.png'
import submarine from '../imges/submarine.png'
import Card from "../Portfolio/Card"
import PopCard from "../Portfolio/PopCard"
import {Helmet} from "react-helmet";

export default class Portfolio extends Component {
    state={
            photos:[
                    {id:"cabinImg" ,name:"cabin",img:cabin,label:"LOG CABIN"},
                    {id:"cakeImg" ,name:"cake",img:cake,label:"TASTY CAKE"},
                    {id:"circusImg" ,name:"circus",img:circus,label:"CIRCUS TENT"},
                    {id:"gameImg" ,name:"game",img:game,label:"CONTROLLER"},
                    {id:"safeImg" ,name:"safe",img:safe,label:"LOCKED SAFE"},
                    {id:"submarineImg" ,name:"submarine",img:submarine,label:"SUBMARINE"},

            ]
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
        <section className='my-5'>
        <h2 className='port-heading text-center text-uppercase'>Portfolio</h2>
        <div className="port-icon my-4">
                    <div className="left lineP"></div>
                    <div className='star-icon'> <i className="fa-solid fa-star fa-2x"></i></div>
                    <div className="right lineP"></div>
                </div>
                <div className="container">
                    <div className="row">
                    {this.state.photos.map((pop,index)=><PopCard PopCrad={pop} key={index} id={index} />)}
                        {/* {this.state.photos.map((layer,index)=><Card lay={layer} key={index} id={index} />)} */}
                        {/* <div className='col-md-6 col-lg-4 mb-5'>
                        <div className="img-contain">
                            <img src={cabin} alt="" className='w-100 rounded' />
                            <div className="lyer">
                            <i className="fa-solid fa-plus fa-3x"></i>
                            </div>
                        </div>
                        </div> */}
                        {/* <div className='col-md-6 col-lg-4 mb-5'>
                        <div className="img-contain ">
                            <img src={cake} alt="" className='w-100 rounded' />
                            <div className="lyer">
                            <i className="fa-solid fa-plus fa-3x"></i>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-5'>
                        <div className="img-contain">
                            <img src={circus} alt="" className='w-100 rounded' />
                            <div className="lyer">
                            <i className="fa-solid fa-plus fa-3x"></i>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-5'>
                        <div className="img-contain">
                            <img src={game} alt="" className='w-100 rounded' />
                            <div className="lyer">
                            <i className="fa-solid fa-plus fa-3x"></i>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-5'>
                        <div className="img-contain ">
                            <img src={safe} alt="" className='w-100 rounded' />
                            <div className="lyer">
                            <i className="fa-solid fa-plus fa-3x"></i>
                            </div>
                        </div>
                        </div>
                        <div className='col-md-6 col-lg-4 mb-5'>
                        <div className="img-contain">
                            <img src={submarine} alt="" className='w-100 rounded' />
                            <div className="lyer">
                            <i className="fa-solid fa-plus fa-3x"></i>
                            </div>
                        </div>
                        </div> */}
                    </div>
                </div>
        </section>

        {/* <div className="sid-cntain">
        <div className="silder py-5">
            <button className='close'> <i className="fa-solid fa-xmark fs-2x"></i></button>
            <div className="container show ">
                <div className="row justify-content-center flex-wrap">
                    <div className='col-lg-8'>
                        <h2 className='mt-3'>jk</h2>
                    <div className="port-icon my-4">
                    <div className="left lineP"></div>
                    <div className='star-icon'> <i className="fa-solid fa-star fa-2x"></i></div>
                    <div className="right lineP"></div>
                </div>
                <div className="img-cont">
                    <img src={game} alt="" className="w-50 rounded mb-5"/>
                </div>
                <p className='lead mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                </div>
                    </div>
                <button className='btn2 rounded'><i className="fa-solid fa-xmark"></i> Close Window</button>
            </div>
        </div>
        </div> */}
        {/* {this.state.photos.map((pop,index)=><PopCard PopCrad={pop} key={index} id={index} />)} */}
        </>
    )
}
}
