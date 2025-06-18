import React,{useState} from 'react'

function Profile() {

    const [profileShow,setProfileShow]=useState(false)

    const toggleProfile = ()=>{
        setProfileShow(!profileShow)
    }

  return (
    <>
        <div className="container-fluid border border-2 border-info p-3">
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
                            <input type="file" name='' id='pf' style={{display:'none'}} />
                            <img src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" alt="profile" className='w-50'/>
                        </label>
                        <input type="text" placeholder='username' className="form-control my-3" />
                        <input type="text" placeholder='Git link' className="form-control mb-3" />
                        <input type="text" placeholder='LinkdIn url' className="form-control mb-3" />
                    </div>
                    <div className="my-2 d-flex justify-content-between">
                        <button className="btn btn-success">Update</button>
                        <button className="btn btn-danger">Cancel/Close</button>
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default Profile
