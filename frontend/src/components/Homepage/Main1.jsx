import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Main1() {
    return (
        <div className="container-fluid position-relative">
            <img className="container-fluid p-0 m-0" src='./blurbg.jpeg' alt="Background" />
            <div className="position-absolute top-40 start-50 translate-middle bg-transparent text-white text-center fw-bold display-3 d-md-block">
                Zarcuit studio
            </div>
            <div className="position-absolute top-75 start-50 translate-middle bg-transparent text-white text-center fw-bold display-6 d-none d-md-block">
                Connecting you to the ultimate streaming experience
            </div>
        </div>
    );
}