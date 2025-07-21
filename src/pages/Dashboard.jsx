import React, { useContext, useEffect, useState } from 'react'
import AddProject from '../components/AddProject'
import Header from '../components/Header'
import Profile from '../components/Profile'
import { deleteProjectApi, userProjectApi } from '../services/allApis'
import { toast } from 'react-toastify'
import Edit from '../components/Edit'
import { addResponseContext, editResponseContext } from '../contextApi/Context'

function Dashboard() {

  const [user,setUser]=useState("")
  const [projects,setProjects] = useState([])

  const {addResponse}=useContext(addResponseContext)
  const {editResponse}=useContext(editResponseContext)

  useEffect(()=>{
    if(sessionStorage.getItem("userData")){
      setUser(JSON.parse(sessionStorage.getItem("userData")))
      getData()
    }
  },[addResponse,editResponse])

  const getData=async ()=>{
    const response = await userProjectApi()
    console.log(response);
    if(response.status === 200){
      setProjects(response.data)
    }
  }

  const handleDelete=async(id)=>{
    const response=await deleteProjectApi(id)
    if(response.status===200){
      getData()
  }
  else{
    toast.error("Something went wrong")
    console.log(response);
    
  }
}


  return (
    <>
      <Header />
      <div className="container-fluid " style={{ minHeight: '65vh' }}>
        <h2>Dashboard</h2>
        <h5>Welcome to ProjectFare, <span className='text-info'>{user.username}</span></h5>
        <div className="row">
          <div className="col-9">
            <AddProject />

            <div className="w-100 border border-3 border-light p-2 mt-4">

              {
                projects.length>0 ?
                <>
                {
                  projects.map(item=>(
                    <div className="m-3 border border-2 border-info p-2 d-flex justify-content-between">
                <h5>{item.title}</h5>
                <div>
                  <a href={item.gitrepo} target='_blank' className='me-3'>
                    <i className="fa-brands fa-square-github fa-xl"></i>
                  </a>
                  <Edit project={item} />
                  <button onClick={()=>{handleDelete(item._id)}} className="btn me-3">
                    <i className="fa-solid fa-trash fa-lg"></i>
                  </button>
                </div>
              </div>
                  ))
                }
                </>
                :
                <h3 className='text-center text-danger'>No Projects Added yet!!</h3>
              }
              
            </div>
          </div>
          <div className="col-3">
            <Profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
