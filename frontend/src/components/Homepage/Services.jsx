import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {Link} from 'react-router-dom';

export default function Services(){
    return(
        <div className="">
            <h1 className="text-center mt-5 service_font" style={{ fontSize: '2rem' }}>Our Services</h1>
            <div className="row p-5 custom_gradient">
                <div className="col-md-4">
                    <div className="card rounded-2 shadow">
                        <div className="card-body">
                            <Link to="/livestream" style={{textDecoration: 'none', color: 'inherit'}}>
                            <img width="100%" height="200px" src="./live_stream.jpeg" alt="" />
                            <h5 className="card-title text-center pt-3 service_font">Live Streaming</h5>
                            <p className=" text-center card-text service_font2">"Bring your events to life in real time".</p>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow rounded-2">
                        <div className="card-body">
                        <Link to="/media_prod" style={{textDecoration: 'none', color: 'inherit'}}>
                            <img height="200px" width="100%" src="./media_prod.jpeg" alt="" />
                            <h5 className="card-title pt-3 service_font text-center">Media Production</h5>
                            <p className="card-text service_font2 text-center">"Organize,Stream, and Elevate Your Content".</p>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card rounded-2 shadow">
                        <div className="card-body">
                        <Link to="/digital_market" style={{textDecoration: 'none', color: 'inherit'}}>
                            <img height="200px" width="100%" src="./digital_market.jpeg" alt="" />
                            <h5 className="card-title pt-3 service_font text-center">Digital Marketing</h5>
                            <p className="card-text service_font2 text-center">"Maximise Your Reach, Amplify Your Impact".</p>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center p-5 custom_gradient">
                <div className="col-md-4">
                    <div className="card rounded-2 shadow">
                        <div className="card-body">
                        <Link to="/event_manage" style={{textDecoration: 'none', color: 'inherit'}}>
                            <img width="100%" height="200px" src="./event_manage.jpeg" alt="" />
                            <h5 className="card-title text-center pt-3 service_font">Event Management</h5>
                            <p className=" text-center card-text service_font2">"Turning your vision into Reality".</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow rounded-2">
                        <div className="card-body">
                        <Link to="/esports" style={{textDecoration: 'none', color: 'inherit'}}>
                            <img height="200px" width="100%" src="./esport_service.jpeg" alt="" />
                            <h5 className="card-title pt-3 service_font text-center">E-Sport Services</h5>
                            <p className="card-text service_font2 text-center">"Powering the Future of Competitive Gaming".</p>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}