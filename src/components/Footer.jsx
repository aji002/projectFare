import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col">
                        <h2>ProjectFare</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed ratione quibusdam nisi nobis? Quasi nobis mollitia tempore? Quia asperiores neque quasi. Magnam voluptate, animi incidunt iure beatae facilis omnis rem.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat dignissimos dolor minima obcaecati totam dolorem. Eius incidunt aperiam porro explicabo eligendi autem voluptates placeat tenetur aliquam fuga, aut necessitatibus minima.
                        </p>
                    </div>
                    <div className="col-2">
                        <h1 className='text-center'>Links</h1>
                        <div className="d-flex justify-content-around flex-column align-items-center">
                            <Link to={'/'} className='text-decoration-none text-info'>Landing</Link>
                            <Link to={'/auth'} className='text-decoration-none text-info'>Login</Link>
                        </div>
                    </div>
                    <div className="col">
                        <h2>Feedbacks</h2>
                        <textarea name="" id="" placeholder='Enter feedback' className='form-control my-3'></textarea>
                        <button className="btn btn-dark">SEND</button>
                    </div>
                </div>
                <h6 className="text-center">ProjectFare 2025 &copy; copyrights reserved</h6>
            </div>
        </>
    )
}

export default Footer
