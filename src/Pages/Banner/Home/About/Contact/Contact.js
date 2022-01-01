import React from 'react'
import './Contact.css'
import banner from '../../../../../bannerImages/1000_F_415483705_W0a7hGcbrURMoX3grdX3ncYd94YKwSDI.jpg'

const Contact = () => {
    return (
        <div>
            <img src={banner} class='img-fluid' alt="" />
            <h2 className='text-center my-5'>Contact Us</h2>
            <div>
            <div class="container">
                <div class="row">
                        <div class="col">
                        <img className='img' src="https://i.ibb.co/nbPmCNc/Capture.png" alt="" />
                        <h5 className='text-center my-5 fw-bold'>OUR LOCATION</h5>
                        <p className='text-center my-5'>PO Box 97845 Baker st. 567,<br/>
                           Los Angeles, California, US.</p>
                        </div>
                        <div class="col">
                        <img className='img' src="https://i.ibb.co/Gssbqyb/Capture.png" alt="" />
                        <h5 className='text-center my-5 fw-bold'>CONTACT US</h5>
                        <p className='text-center my-5'>Mobile: (+04) 600 444 999<br/>
                                                        Fax: (+04) 600 888 222</p>
                        </div>
                        <div class="col">
                        <img className='img' src="https://i.ibb.co/NnNQ7Ct/Capture.png" alt="" />
                        <h5 className='text-center my-5 fw-bold'>CONTACT US</h5>
                        <p className='text-center my-5'>Support24/7@domain.com<br/>
                                                        Info@domain.com</p>
                        </div>
                </div>
            </div>
            </div>
        </div>
    
    )
}

export default Contact
