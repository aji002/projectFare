import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProjectApi } from '../services/allApis';
import { toast } from 'react-toastify';
import { addResponseContext } from '../contextApi/Context';


function AddProject() {
    const [show, setShow] = useState(false);
    const [project,setProject]=useState({
        title:"",description:"",languages:"",gitrepo:"",demo:"",image:""
    })
    const [preview,setPreview]=useState("")
    useEffect(()=>{
        if(project.image){
            setPreview(URL.createObjectURL(project.image))
        }
        else{
            setPreview("")
        }
    },[project.image])

    const {setAddResponse}=useContext(addResponseContext)

    const handleSubmit=async()=>{
        console.log(project);
        const {title,description,languages,gitrepo,demo,image}=project
        if(!title || !description || !languages || !gitrepo || !demo || !image){
            toast.warning("Enter valid iputs")
        }
        else{
            const response =await addProjectApi(project)
            console.log(response);
            if(response.status===200){
                toast.success("Project added!!")
                setProject({
                   title:"",description:"",languages:"",gitrepo:"",demo:"",image:"" 
                })
                setPreview("")
                setAddResponse(response)
                handleClose()
            }
            else{
                toast.error("Project adding failed!!")
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className="btn btn-secondary border border-info" onClick={handleShow}>Add New Project + </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="ff">
                                <input type="file" onChange={(e)=> {setProject({...project,image:e.target.files[0]})}} name='' style={{ display: 'none' }} id='ff' />
                                <img src={preview?preview:"https://static.thenounproject.com/png/1231023-200.png"} alt="img" className='img-fluid'/>
                            </label>
                        </div>
                        <div className="col">
                            <input type="text" placeholder='Enter Title' onChange={(e)=> {setProject({...project,title:e.target.value})}} className='form-control mb-3' />
                            <input type="text" placeholder='Enter Description' onChange={(e)=> {setProject({...project,description:e.target.value})}} className='form-control mb-3' />
                            <input type="text" placeholder='Enter Language Used' onChange={(e)=> {setProject({...project,languages:e.target.value})}} className='form-control mb-3' />
                            <input type="text" placeholder='Enter Git Repo URL' onChange={(e)=> {setProject({...project,gitrepo:e.target.value})}} className='form-control mb-3' />
                            <input type="text" placeholder='Enter Demo URL' onChange={(e)=> {setProject({...project,demo:e.target.value})}} className='form-control mb-3' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>SAVE</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject
