import { useNavigate } from "react-router-dom";
import '../css/Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();
    function home() {
        navigate(`/`);
    }
    return (
        <nav className="navbar navbar-light navbar-expand-lg border-bottom border-dark border-1">
            <div className="container-fluid justify-content-between">
                <div className="d-flex align-items-center">
                    <h3 className="text-dark font-custom-manifold mb-0">MeatApp</h3>
                </div>
                <button className="navbar-toggler border border-dark border-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <div className="d-flex">
                        <ul className="navbar-nav mb-2 mb-lg-0 justify-content-center">
                            <li className="nav-item">
                                <div className="d-flex align-items-center">
                                    <h6 className="mx-3 m-0 p-2">
                                        <a className="decoration" onClick={home}>
                                            Home
                                        </a>
                                    </h6>

                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex align-items-center">
                                    <h6 className="mx-3 m-0 p-2">
                                        <a className="decoration">
                                            Food
                                        </a>
                                    </h6>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex align-items-center">
                                    <h6 className="mx-3 m-0 p-2">
                                        <a className="decoration">
                                            Ingredients
                                        </a>
                                    </h6>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="d-flex align-items-center">
                                    <h6 className="mx-3 m-0 p-2">
                                        <a className="decoration">
                                            Local Culinary
                                        </a>
                                    </h6>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </nav >
    );
}

