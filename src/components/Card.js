import React from 'react'

import './card.css'

const Card = () => {
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="card shadow-lg">
                            <div className="custom-card-img">
                            <img src="/images/c.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                               <center> <h5 className="card-title">Card title</h5> </center>
                                <center><button className="btn btn-success">View Details</button></center>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="/images/cp1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                               <center> <h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-success">View Details</button></center>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="/images/cp4.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-success">View Details</button></center>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-lg">
                            <img src="/images/c.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <center><h5 className="card-title">Card title</h5></center>
                                <center><button className="btn btn-success">View Details</button></center>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
