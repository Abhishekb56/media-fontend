import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Videocard from './Videocard'
import { getVideo } from '../services/allapi'





function View({serverRes}) {

  const[deleteStatus,setdeleteStatus]=useState(false)

  const[allVideos,setallVideos]=useState([])

  useEffect(() => {
    
    getallVideos()

    
  
    
  }, [serverRes,deleteStatus])
  

  const getallVideos=async()=>{

  const response= await getVideo()

  setallVideos(response.data);



  }

  console.log(allVideos);

  const handledeleteStatus=(res)=>{

    setdeleteStatus(res)

  }

  
  return (
    <div className='ms-4 border p-3 rounded'>

      <Row>

        {

          allVideos.map(video=>(

            <Col className='ps-3 mb-3' sm={12} md={6}>
          
         <Videocard card={video} handledeleteStatus={handledeleteStatus}/>
          
          </Col>


          ))
          
        
        }

      </Row>

    </div>
  )
}

export default View