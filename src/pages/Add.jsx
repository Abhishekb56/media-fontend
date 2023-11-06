import React from 'react'
import { PlusCircle } from 'react-feather'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideo} from '../services/allapi';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


function Add({handleresponse}) {

  const[UploadData,setuploadData]=useState({

    id:"",caption:"",thumbnail:"",url:""


  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const setInput=(e)=>{

  const{name,value}=e.target
  setuploadData({...UploadData,[name]:value})
  // console.log(UploadData);

}

// src="https://www.youtube.com/embed/udAlOSn4yFo"

// youtube link:https://www.youtube.com/watch?v=udAlOSn4yFo

const extractUrl=(e)=>{

  const youtubeUrl=e.target.value  

  if(youtubeUrl.includes("v=")){

    let index=youtubeUrl.indexOf("v=")
    console.log(index);

    let videoUrl=youtubeUrl.substring(index+2,index+13)

    console.log(videoUrl);

    let videoData=UploadData

    videoData.url=`https://www.youtube.com/embed/${videoUrl}`

    setuploadData(videoData)

   

  }


}

console.log(UploadData);
    

const handleAdd= async()=>{
  const{id,caption,thumbnail,url}=UploadData

  if(!id||!caption||!thumbnail||!url){
    toast("please fill the form completely")
  }

  else{

const response= await addVideo(UploadData)

if(response.status>=200&&response.status<300){

  handleresponse(response.data)

  // console.log();

  setShow(false)

  toast.success("new video uploaded successfully", { position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",})

  }
  else{
    toast("provide a unique id!!!")
  }

  }

}


  return (
    <>
        <div onClick={handleShow} className='btn'>
            <PlusCircle color='blue' size={90}/>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form>
         <FloatingLabel className='mb-3' controlId="floatingId" label="Uploading Video Id">
        <Form.Control type="text" placeholder="Video Id" name='id' onChange={setInput} />
      </FloatingLabel>

      <FloatingLabel className='mb-3' controlId="floatingCaption" label="Uploading Video caption">
        <Form.Control type="text" placeholder="Video caption" name='caption' onChange={setInput} />
      </FloatingLabel>

      <FloatingLabel className='mb-3' controlId="floatingImage" label="Uploading Video Image url">
        <Form.Control type="text" placeholder="Video cover Image Url" name='thumbnail' onChange={setInput} />
      </FloatingLabel>

      <FloatingLabel className='mb-3' controlId="floatingLink" label="Uploading Video link">
        <Form.Control type="text" placeholder="Video Link" name='url' onChange={extractUrl} />
      </FloatingLabel>


         </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      
      />
    </>
  )
}

export default Add