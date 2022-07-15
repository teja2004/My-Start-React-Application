import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";
function Nav(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${
          props.mainMode === "light" ? "dark" : "light"
        } bg-${props.mainMode === "light" ? "danger" : "success"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  {props.start}
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                onChange={props.toggleMode}
              />
              <label className={`form-check-label text-${props.mainMode === 'light'?'light':'dark'} `} htmlFor="flexSwitchCheckChecked">
                <strong>
                  <i>{`${
                    props.mainMode === "light" ? "light" : "dark"
                  } Mode`}</i>
                </strong>
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav

// PropTypes for components Using.
Nav.propTypes = {
  title : PropTypes.string.isRequired,  //isRequired is used that this is definite required.
  start : PropTypes.string.isRequired
}


// Default Props for components if User dosen't give any props in App.js .
Nav.defaultProps = {
  title : "Title Please",
  start : "About"
}