import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'

const Signup = () => {
    return (
        <>
        <Nav/>
        <div className="container mt-4 mb-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 shadow-lg p-3">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="firstname">FirstName</label>
                            <input type="text" className="form-control" id="firstname"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastname">LastName</label>
                            <input type="text" className="form-control" id="lastname"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpassword">Confirm Password</label>
                            <input type="password" className="form-control" id="cpassword"/>
                        </div>
                        <div className="col-md-6 mb-3">
                            <button className="btn btn-primary form-control">Signup</button>
                        </div>

                        <div className="mb-3">
                            Already have a Account ? &nbsp; <b><Link to="/signin" className="text-decoration-none">Signin</Link></b>
                        </div>

                    </form>
                </div>
            </div>
        </div>

        <Footer/>
            
        </>
    )
}

export default Signup
