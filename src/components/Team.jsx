import React from 'react';
import img1 from '../images/team/team1.JPG';
import img2 from '../images/team/team2.jpeg';
import img3 from '../images/team/team3.jpeg';
import img4 from '../images/team/team4.jpeg';
import img5 from '../images/team/team5.jpeg';
import img6 from '../images/team/team6.jpeg';

const Team = () => {
    return (
        <div className='team-container'>
            <div className="container">

                <h1 className='fw-bold text-center' data-aos="zoom-in-down">Meet Our Team</h1>
                <div className="row mt-5">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center p-2"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={img1} alt="team" className='rounded-circle' />
                        <p>Lead Dev</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center p-2"
                        data-aos="fade-right"
                        data-aos-offset="400"
                        data-aos-easing="ease-in-sine">
                        <img src={img2} alt="team" className='rounded-circle' />
                        <p>Project Manager</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center p-2"
                        data-aos="fade-right"
                        data-aos-offset="500"
                        data-aos-easing="ease-in-sine">
                        <img src={img3} alt="team" className='rounded-circle' />
                        <p>Community Manager</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center p-2"
                        data-aos="fade-right"
                        data-aos-offset="600"
                        data-aos-easing="ease-in-sine">
                        <img src={img4} alt="team" className='rounded-circle' />
                        <p>Admin</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center p-2"
                        data-aos="fade-right"
                        data-aos-offset="700"
                        data-aos-easing="ease-in-sine">
                        <img src={img6} alt="team" className='rounded-circle' />
                        <p>Creative Design</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center p-2"
                        data-aos="fade-right"
                        data-aos-offset="800"
                        data-aos-easing="ease-in-sine">
                        <img src={img4} alt="team" className='rounded-circle' />
                        <p>Charity Coordinator</p>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6 text-center p-2"
                        data-aos="fade-right"
                        data-aos-offset="900"
                        data-aos-easing="ease-in-sine">
                        <img src={img5} alt="team" className='rounded-circle' />
                        <p>Charity Coordinator</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
