import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const AboutUs = () => {
    return (
        <>
            <header className="bg-dark text-white py-3">
                <nav>
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/events">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>

            <section id="about-intro" className="container my-5">
                <h1 className="text-center">About ZARCUIT</h1>
                <p className="text-center">ZARCUIT is your go-to platform for live streaming events of all kinds. Whether it’s a concert, conference, sports game, or any live event, we provide seamless streaming experiences that connect audiences to the events they love, no matter where they are.</p>
                <p className="text-center">Our mission is to bring people together through live experiences, offering high-quality streaming and interactivity in a user-friendly environment. We believe in the power of live moments and aim to make every stream an unforgettable experience.</p>
            </section>

            <section id="our-team" className="container my-5">
                <h2 className="text-center mb-4">Meet Our Team</h2>
                <div className="row">
                    <div className="col-md-4 text-center mb-4">
                        <img src="team-member-1.jpg" alt="Team Member 1" className="img-fluid rounded-circle" style={{ maxWidth: '200px' }} />
                        <h3>Pranav Rajendra Prasad</h3>
                        <p>CEO & Co-Founder</p>
                        <p>Pranav is the visionary behind ZARCUIT. With a background in technology and a passion for live events, he has built the platform to bring streaming experiences to a global audience.</p>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <img src="team-member-2.jpg" alt="Team Member 2" className="img-fluid rounded-circle" style={{ maxWidth: '200px' }} />
                        <h3>B Abhiram</h3>
                        <p>CTO & Co-Founder</p>
                        <p>Abhiram leads the tech side of ZARCUIT, ensuring the platform is scalable, reliable, and secure. He has extensive experience in video streaming technology and cloud services.</p>
                    </div>
                    <div className="col-md-4 text-center mb-4">
                        <img src="team-member-3.jpg" alt="Team Member 3" className="img-fluid rounded-circle" style={{ maxWidth: '200px' }} />
                        <h3>Shellu K Shaji</h3>
                        <p>Head of Marketing</p>
                        <p>Shellu is the mastermind behind ZARCUIT’s marketing efforts. He builds strategies to bring our events to the audience and ensures that every live stream reaches the right viewers.</p>
                    </div>
                </div>
            </section>

            <section id="contact" className="container text-center my-5">
                <h2>Contact Us</h2>
                <p>If you have any questions, partnership inquiries, or need assistance, feel free to reach out to us!</p>
                <p>Email: <a href="mailto:support@zarcuit.com">support@zarcuit.com</a></p>
                <p>Phone: (555) 123-4567</p>
                <p>
                    <a href="https://www.facebook.com/Freepik" target="_blank" className="btn btn-primary">Facebook</a>
                    <a href="https://www.instagram.com/__s_h_e_l_l_u__/?igsh=YzljYTk1ODg3Zg%3D%3D#" target="_red" className="btn btn-primary">Instagram</a>
                    <a href="https://in.linkedin.com/in/shellu-k-shaji-694a1a294" target="_blank" className="btn btn-primary">Linkedin</a>
                </p>
            </section>

            <section id="map" className="container my-5">
                <h2 className="text-center mb-4">Our Location</h2>
                <p className="text-center">We are located at Kottukulam Hills, Pathamuttom, Kottayam, Kerala 686532. You can view our location on the map below:</p>
                <div className="text-center">
                    <img src="https://maps.googleapis.com/maps/api/staticmap?center=9.588026,76.577150&zoom=15&size=600x400&markers=color:red%7Clabel:S%7C9.588026,76.577150&key=YOUR_GOOGLE_MAPS_API_KEY" alt="Zarcuit Location Map" className="img-fluid" />
                </div>
            </section>

            <footer className="bg-dark text-white text-center py-3">
                <p>&copy; 2025 ZARCUIT. All rights reserved.</p>
            </footer>
        </>
    );
};

export default AboutUs;