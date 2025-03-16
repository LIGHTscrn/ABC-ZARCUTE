import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Support = () => {
    return (
        <div>
            <header className="bg-dark text-white text-center py-4">
                <h1>Welcome to Zarcuit Support</h1>
                <p>Your go-to platform for all event streaming assistance!</p>
            </header>

            <div className="container mt-5">
                <section className="row">
                    {/* Support Form */}
                    <div className="col-md-6">
                        <h2>Contact Us</h2>
                        <form action="/submit-support" method="POST">
                            <div className=" mb-3">
                                <label htmlFor="name" className="form-label">Your Name:</label>
                                <input type="text" id="name" name="name" className="form-control" placeholder="Enter your name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your Email:</label>
                                <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Your Message:</label>
                                <textarea id="message" name="message" className="form-control" rows="6" placeholder="Describe your issue or question" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>

                    {/* FAQ Section */}
                    <div className="col-md-6">
                        <h2>Frequently Asked Questions</h2>
                        <ul className="list-unstyled">
                            <li><strong>How can I stream events on Zarcuit?</strong> <br /> To stream an event on Zarcuit, please visit our <a href="/create-event">Create Event</a> page and follow the step-by-step instructions.</li>
                            <li><strong>Can I watch events on mobile devices?</strong> <br /> Yes! Zarcuit is fully optimized for both desktop and mobile devices, ensuring a smooth experience on all screen sizes.</li>
                            <li><strong>What to do if my stream is lagging?</strong> <br /> Please ensure that your internet connection is stable. If the issue persists, contact us via the form above or check out our <a href="/troubleshooting">troubleshooting guide</a>.</li>
                            <li><strong>How can I reset my password?</strong> <br /> To reset your password, click on the <a href="/reset-password">Reset Password</a> link on the login page.</li>
                        </ul>
                    </div>
                </section>
            </div>

            <footer className="bg-dark text-white text-center py-3 mt-5">
                <p>Need further assistance? Get in touch with us:</p>
                <p>Email: <a href="mailto:support@zarcuit.com" className="text-white">support@zarcuit.com</a></p>
                <p>Follow us on:</p>
                <a href="https://facebook.com/zarcuit" target="_blank" rel="noopener noreferrer" className="text-white mx-3">Facebook</a>
                <a href="https://www.linkedin.com/in/shellu-k-shaji-694a1a294/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-white mx-3">Linkedin</a>
                <a href="https://instagram.com/zarcuit" target="_blank" rel="noopener noreferrer" className="text-white mx-3">Instagram</a>
                <p>&copy; 2025 ZARCUIT. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Support;
