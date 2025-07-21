import React,{useContext, useEffect, useState} from 'react'
import { toast } from 'react-toastify'
import { updateProfileApi } from '../services/allApis'
import { useNavigate } from 'react-router-dom'
import { authContext } from '../contextApi/Context'
import base_url from '../services/base_url'

function Profile() {

    const [profileShow,setProfileShow]=useState(false)

    const [profileData,setProfileData]=useState({
        username:"",github:"",linkedin:"",profile:""
    })

    const [preview,setPreview]=useState("")

    const nav=useNavigate()
    const {setAuthStatus}=useContext(authContext)

    useEffect(()=>{
        if(sessionStorage.getItem("userData")){
            const userData = JSON.parse(sessionStorage.getItem("userData"))
            setProfileData({...userData})
        }
    },[])

    useEffect(()=>{
        if(profileData.profile.type){
            setPreview(URL.createObjectURL(profileData.profile))
        }
        else{
            setPreview("")
        }
    },[profileData.profile.type])

    const handleEdit=async()=>{
        console.log(profileData);
        const {username,github,linkedin, profile}=profileData
        if(!username || !github || !linkedin || !profile){
            toast.warning("Enter valid inputs")
        }
        else{
            let header={}
            if(profile.type){
                header={
                    "Authorization":`Token ${sessionStorage.getItem('token')}`,
                    "Content-Type":"multipart/form-data"
                }
            }
            else{
                header={
                    "Authorization":`Token ${sessionStorage.getItem('token')}`,
                    "Content-Type":"application/json"
                }
            }
            const response =await updateProfileApi(profileData,header)
            if(response.status==200){
                toast.success("Profile updated")
                nav('/')
                sessionStorage.clear()
                setAuthStatus(false)
            }
            else{
                toast.error("Updation failed")
                console.log(response);
                
            }
        }
    }

    const toggleProfile = ()=>{
        setProfileShow(!profileShow)
    }

  return (
    <>
        <div className="container-fluid border border-2 border-info p-3 mb-3">
            <div className="d-flex justify-content-between">
                <h3>Profile</h3>
                <button className="btn" onClick={toggleProfile}>
                    {
                        profileShow ? 
                        <i className="fa-solid fa-toggle-on fa-xl"></i>
                        :
                        <i className="fa-solid fa-toggle-off fa-xl"></i>
                    }
                </button>
            </div>
            {
                profileShow &&
                <div className="w-100">
                    <div>
                        <label htmlFor="pf" className='d-flex justify-content-center'>
                            <input type="file" name='' id='pf' onChange={(e)=>{setProfileData({...profileData,profile:e.target.files[0]})}}  style={{display:'none'}} />
                            <img src={preview?preview:(profileData.profile?`${base_url}/projectimg/${profileData.profile}`:"https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg")} alt="profile" className='w-50'/>
                        </label>
                        <input type="text" placeholder='username' onChange={(e)=>{setProfileData({...profileData,username:e.target.value})}} defaultValue={profileData.username} className="form-control my-3" />
                        <input type="text" placeholder='Git link' onChange={(e)=>{setProfileData({...profileData,github:e.target.value})}} defaultValue={profileData.github} className="form-control mb-3" />
                        <input type="text" placeholder='LinkdIn url' onChange={(e)=>{setProfileData({...profileData,linkedin:e.target.value})}} defaultValue={profileData.linkedin} className="form-control mb-3" />
                    </div>
                    <div className="my-2 d-flex justify-content-between">
                        <button className="btn btn-success" onClick={handleEdit}>Update</button>
                        <button className="btn btn-danger">Cancel/Close</button>
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default Profile
