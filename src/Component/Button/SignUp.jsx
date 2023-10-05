import React from 'react'
import {Link} from 'react-router-dom'
const SignUp = () => {
    return (
        <>
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModel">
                <span className='fa fa-user-plus me-1'></span> Register
            </button>


            <div className="modal fade" id="signupModel" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        <Link to='https://accounts.google.com/v3/signin/identifier?dsh=S-1123030681%3A1677164836425369&ec=hpp_signin_001&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AWnogHf0qjA9Q7ZSpHX83tfwwYOXLW6dW1QbRD_CtRRUwbzlrO8PEI4HmeqILtpgpSmKhVrDPcJlFw' className="btn btn-primary w-100 mb-4"><span className='fa fa-google me-2'></span> Sign In With Google</Link>
                           <Link to='https://www.facebook.com/' className="btn btn-primary w-100 mb-4"><span className='fa fa-facebook-official me-2'></span> Sign In With Facebook</Link>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">UserName</label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary mt-3 w-100">Register</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
