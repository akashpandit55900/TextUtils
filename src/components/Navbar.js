import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/aboutUs">{props.about}</Link>
                            </li>
                        </ul>

                        <button
                            className="color-palette-btn mx-1"
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                backgroundColor: '#ffffff',
                                border: '2px solid white'
                            }}
                            onClick={props.toggleMode}
                        ></button>
                        <button
                            className="color-palette-btn mx-1"
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                backgroundColor: '#53031e',
                                border: '2px solid white'
                            }}
                            onClick={props.toggleMode}
                        ></button>
                        <button
                            className="color-palette-btn mx-1"
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                backgroundColor: '#460252',
                                border: '2px solid white'
                            }}
                            onClick={props.toggleMode}
                        ></button>
                        <button
                            className="color-palette-btn mx-1"
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                backgroundColor: '#007368',
                                border: '2px solid white'
                            }}
                            onClick={props.toggleMode}
                        ></button>
                        <button
                            className="color-palette-btn mx-1"
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                backgroundColor: '#042743',
                                border: '2px solid white'
                            }}
                            onClick={props.toggleMode}
                        ></button>
                        <button
                            className="color-palette-btn mx-1 "
                            style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '50%',
                                backgroundColor: '#000000',
                                border: '2px solid white'
                            }}
                            onClick={props.toggleMode}
                        ></button>

                        {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}> */}
                            {/* <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" /> */}
                            {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode === 'light' ? 'dark' : 'light'} mode`}</label> */}
                        {/* </div> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string,
// };

// Navbar.defaultProps = {
//     title: 'Set title here',
//     about: 'About text here'
// };


