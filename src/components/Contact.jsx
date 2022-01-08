import React from 'react'

const Contact = () => {
    return (
        <div className='contact-container' id='contact'>
            <div className="container">

                <h1 className='text-center fw-bold'>CONTACT US</h1>
                <h3 className='mt-4'>HAVE QUESTIONS? IDEAS? WANT TO COLLABORATE?
                    DROP US A LINE.</h3>

                <div className="row mt-5">
                    <div className="col-lg-8 col-md-8 col-sm-10 col-12 mx-auto">

                        <form action="">

                            <div className='mb-3'>
                                <label htmlFor="username" className='mb-2 fw-bold'>Your name (required)</label>
                                <input type="text" className='form-control' placeholder='Your Name' required />
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12 mb-lg-0 mb-md-0 md-sm-3 mb-0'>
                                        <label htmlFor="email" className='mb-2 fw-bold'>Your Email (required)</label>
                                        <input type="text" className='form-control' placeholder='Your Email' required />
                                    </div>
                                    <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                                        <label htmlFor="username" className='mb-2 fw-bold'>Subject</label>
                                        <input type="text" className='form-control' placeholder='Anything specific?' />
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="message">Your Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <button className='btn btn-primary form-control'>Send Message!</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
