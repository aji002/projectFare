import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';


function Auth() {

  const [authState, setAuthState] = useState(false)

  const handleAuthState = () => {
    setAuthState(!authState)
  }


  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="p-3 border border-light border-3 w-75">
          <div className="row">
            <div className="col mt-5">
              <img src="https://png.pngtree.com/png-vector/20190919/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1742031.jpg"
                alt="" className='w-75' />
            </div>
            <div className="col">
              <h2>
                {
                  authState ?
                  <>Register</>
                  :
                  <>Login</>
                }
              </h2>
              <div>
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                {
                  authState &&
                  <FloatingLabel controlId="floatingInp" label="Username" className="mb-3">
                    <Form.Control type="text" placeholder="username" />
                  </FloatingLabel>
                }

                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
              </div>
              <div className="d-flex justify-content-between mt-5">
                {
                  authState ?
                    <button className="btn btn-light">Register</button>
                    :
                    <button className="btn btn-light">Login</button>
                }


                <button className="btn btn-link" onClick={handleAuthState}>
                  {
                    authState ?
                      <>Already a User?</>
                      :
                      <>New User?</>
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth
