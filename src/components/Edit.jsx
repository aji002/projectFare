import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import base_url from '../services/base_url';
import { toast } from 'react-toastify';
import { editProjectApi } from '../services/allApis';
import { editResponseContext } from '../contextApi/Context';

function Edit({project}) {
    const [show, setShow] = useState(false);
    const [newProject,setNewProject]=useState(project)
    const [preview,setPreview]=useState("")

    useEffect(()=>{
        if(newProject.image.type){
            setPreview(URL.createObjectURL(newProject.image))
        }
        else{
            setPreview("")
        }
    },[newProject.image.type])

    const {setEditResponse}=useContext(editResponseContext)

    const handleEdit=async()=>{
        console.log(newProject);
        const {title,description,languages,gitrepo,demo,image}=newProject
        if(!title || !description || !languages || !gitrepo || !demo || !image){
            toast.warning("Enter valid inputs!!")
        }else{
            if(image.type){
                const header={
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Token ${sessionStorage.getItem('token')}`
                }
                const response=await editProjectApi(project._id,newProject,header)
                if(response.status==200){
                    toast.success("Project updated!!")
                    setPreview("")
                    handleClose()
                    setEditResponse(response)
                }
                else{
                    toast.error("Something went wrong!!")
                    console.log(response);
                    
                }
            }
            else{
                const header={
                    "Content-Type":"application/json",
                    "Authorization":`Token ${sessionStorage.getItem('token')}`
                }
                const response=await editProjectApi(project._id,newProject,header)
                if(response.status==200){
                    toast.success("Project updated!!")
                    setPreview("")
                    handleClose()
                    setEditResponse(response)
                }
                else{
                    toast.error("Something went wrong!!")
                    console.log(response);
                    
                }
            }
        }
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <button className="btn me-3" onClick={handleShow}>
                <i className="fa-solid fa-pen-to-square fa-lg"></i>
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="ff">
                                <input type="file" name='' onChange={(e)=>{setNewProject({...newProject,image:e.target.files[0]})}} style={{ display: 'none' }} id='ff' />
                                <img src={preview?preview: `${base_url}/projectimg/${project?.image}`} alt="img" className='img-fluid' />
                            </label>
                        </div>
                        <div className="col">
                            <input type="text" placeholder='Enter Title' onChange={(e)=>{setNewProject({...newProject,title:e.target.value})}} defaultValue={project?.title} className='form-control mb-3' />
                            <input type="text" placeholder='Enter Description' onChange={(e)=>{setNewProject({...newProject,description:e.target.value})}} defaultValue={project?.description} className='form-control mb-3' />
                            <input type="text" placeholder='Enter Language Used' onChange={(e)=>{setNewProject({...newProject,languages:e.target.value})}} defaultValue={project?.languages} className='form-control mb-3' />
                            <input type="text" placeholder='Enter Git Repo URL' onChange={(e)=>{setNewProject({...newProject,gitrepo:e.target.value})}} defaultValue={project?.gitrepo} className='form-control mb-3' />
                            <input type="text" placeholder='Enter Demo URL' onChange={(e)=>{setNewProject({...newProject,demo:e.target.value})}} defaultValue={project?.demo} className='form-control mb-3' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>Update</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit
