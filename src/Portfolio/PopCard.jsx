import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Helmet} from "react-helmet";

// export default function PopCard(props) {
//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
// export default class PopCard extends Component {
  
//   render() {
//     let{id ,name ,img}=this.props.PopCrad;
//     return (
//             <div className="parent">
//                 <div className="container">
                    
//                 </div>
//             </div>
//     )
//   }
// }

function MyVerticallyCenteredModal(props) {
  console.log(props)
  return (
    <Modal className='model'
      {...props}
      
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className='info'>
        <h2 className='pop-heading'>{props.name}</h2>
        <div className="port-icon my-4 m-auto">
                    <div className="left line bg-dark"></div>
                    <div className='star-icon'> <i className="fa-solid fa-star fa-2x"></i></div>
                    <div className="right line bg-dark"></div>
                </div>
        </div>
        <img src={props.img} alt="" className='w-75 rounded mb-5' />
        <p className='lead text-primary px-3 fs-6 fw-light'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.
        </p>
        <Button onClick={props.onHide} ><i class="fa-solid fa-x"></i> Close</Button>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide} >x Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default function PopCard(props) {
  const [modalShow, setModalShow] = React.useState(false);
  let{id ,name ,img,label}=props.PopCrad;
  return (
    <>
      <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content="Home" />
                <title>Start React</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className='col-md-6 col-lg-4 mb-5'>
         <div className="img-contain "onClick={() => setModalShow(true)}>
                            <img src={img} alt="" className='w-100 rounded' />
                            <div className="lyer">
                            <i className="fa-solid fa-plus fa-3x"></i>
                            </div>
                        </div>

         </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        name={label}
        img={img}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
