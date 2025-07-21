import React, { useEffect,useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { allProjectsApi } from '../services/allApis'

function Landing() {

    const [logState,setLogState]=useState(false)
    const [samples,setSamples]=useState([])

useEffect(()=>{
    getData()
    if(sessionStorage.getItem("token")){
        setLogState(true)
    }
    else{
        setLogState(false)
    }
},[])

const getData = async()=>{
    const response=await allProjectsApi()
    console.log(response);
    
    if(response.status==200){
        setSamples(response.data.slice(0,3))
    }
    else{
        console.log(response);
        
    }
}

  return (
    <>
    <div className="container-fluid">
        <div className="w-100 row" style={{minHeight:"70vh"}}>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center flex-column">
                <h1>ProjectFare 2025</h1>
                <p style={{textAlign:'justify'}}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid voluptate facilis nihil perferendis nesciunt sapiente, id in blanditiis nobis numquam distinctio eligendi reiciendis velit amet! Exercitationem, ad dolorem! A, eaque.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem iure magnam doloribus natus nisi, dolores at assumenda quam magni! Repudiandae voluptate repellat laboriosam numquam explicabo, rerum quaerat eius id optio?
                </p>
                <div className='d-grid'>
                    {
                        logState?
                        <Link className='btn btn-light' to={'/dash'}>Go to dashboard</Link>
                        :
                        <Link className='btn btn-light' to={'/auth'}>Explore now...</Link>
                    }
                    
                </div>
            </div>
            <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXiZUseOYdH_SPUtIlfyvxZo9bxzLBUaHcow&s" alt="" className='img-fluid'/>
            </div>
        </div>
        <div className="w-100 my-5">
            <h3>projects you may like...</h3>
            <div className='d-flex justify-content-around my-5'>
                {
                    samples.length>0?
                    <>
                    {
                        samples.map(item=>(
                            <ProjectCard project={item}/>
                        ))
                    }
                    </>
                    :
                    <h4 className='text-center text-danger'>No projects available</h4>
                }
            </div>
            <div className='text-center'>
                <Link to={'/allproject'} className='text-dark'>view more...</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landing
