import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'




function Landingpage() {

  // useNavigate is hook

  const navigate=useNavigate()

  const handleNavigate=()=>{

    // navigate to home

    navigate('/home')



  }


  return (
    <div>

      <Row className='align-items-center'>

      
     <Col></Col>

     <Col lg={6}>

      <h1>Welcome Videooo.com</h1>
      <p  style={{textAlign:'justify'}}>Where user can use their favourite videos user can upload any videos by copy and paste their url videoo.com will allow to add
        and remove their uploaded videos and also arrange them in different categories by drag and drop it is free try it now
      </p>

      <button onClick={handleNavigate} className='btn btn-success'>Click here to know more</button>


     </Col>

     <Col lg={4}>

      <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb0H8kg2z-BbZ3Ew1Kj3mkHTnIo7pMFykfFw&usqp=CAU" alt="no image" />

     </Col>

     <Col></Col>


      </Row>



    </div>
  )
}

export default Landingpage