import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">

            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Kratin</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/login">Login </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/register">Register </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
        
        
    )
}