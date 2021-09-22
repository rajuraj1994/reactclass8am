import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

const Signin = () => {
    return (
        <>
        <Nav/>
        <div className="container mt-4 mb-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 shadow-lg p-3">
                    <form>
                        
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"/>
                        </div>
                       
                        <div className="col-md-6 mb-3">
                            <button className="btn btn-primary form-control">Signin</button>
                        </div>

                        <div className="mb-3">
                            Not Registered Yet ? &nbsp; <b><Link to="/signup" className="text-decoration-none">Signup</Link></b>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <Footer/>
            
        </>
    )
}

export default Signin
