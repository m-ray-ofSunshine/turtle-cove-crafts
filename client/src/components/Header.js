import React from 'react';
import Auth from '../utils/Auth'

import turtle from "../assets/images/sea-turtle-colored-cropped.svg"
function Header() {

    const logOut = () => {
        localStorage.removeItem("id_token")
        window.location.reload()
    }



    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={turtle} alt="" width="75" style={{marginRight:"2vw"}} className="d-inline-block align-text-top"/>
                        Turtle Cove Crafts
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/custom">Custom</a>
                            </li>
                            { Auth.loggedIn() && (
                                <li className="nav-item">
                                <a className="nav-link" href="/profile">My Profile</a>
                            </li>
                            )}
                            { Auth.loggedIn() ? <li className="nav-item">
                                <a className="nav-link" href="/" onClick={logOut}>Logout</a>
                            </li> : <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Header
    ;