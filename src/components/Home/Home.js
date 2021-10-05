import React from 'react';
import Cover from '../../Files/Cover.png'
import './Home.css'
import pic1 from '../../Files/university1.png'
import pic2 from '../../Files/university2.png'
import pic3 from '../../Files/university3.png'
import pic4 from '../../Files/university4.png'
import Events from '../Events/Events';

const Home = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="Left-side">
                    <h1>We Help to <span>Build</span> <br/>  Your Dream</h1>
                    <p>We are  always availed to consult on taking your higher education to the next level so you can stay competitive</p>
                    <button>Apply Now <i class="fa fa-arrow-right"></i></button>
                    <ul>
                        <li><i class="fa fa-facebook-f"></i></li>
                        <li><i class="fa fa-instagram"></i></li>
                        <li><i class="fa fa-twitter"></i></li>
                    </ul>
                </div>
                <div className="Right-side">
                    <img src={Cover}></img>
                </div>
            </div>
            <main>
                <div className="feature-university">
                    <p>Featured Universities</p>
                    <div>
                        <ul>
                            <li><img src={pic1}></img></li>
                            <li><img src={pic2}></img></li>
                            <li><img src={pic3}></img></li>
                            <li><img src={pic4}></img></li>
                        </ul>
                    </div>
                </div>
                <section className="event">
                    <h2>Upcoming University Events</h2>
                    <p>Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu<br /> degendae praesidia firmissima. Torquatos nostros? quos tu paulo aquid bonum esse vult.</p>
                    <div className="event-items">
                        <Events></Events>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;