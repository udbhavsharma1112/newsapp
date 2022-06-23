import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar fixed-top navbar-expand-lg bg-${this.props.isdark ? "dark" : "light"}`}>
          <div className="container-fluid">
            <a className={`navbar-brand text-${this.props.isdark ? "light" : "dark"}`} href="/">NewsHunt</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className={`nav-link text-${this.props.isdark ? "light" : "dark"} `} aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-${this.props.isdark ? "light" : "dark"} `} href="/business">Business</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-${this.props.isdark ? "light" : "dark"} `} href="/entertainment">Entertainment</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-${this.props.isdark ? "light" : "dark"} `} href="/general">General</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-${this.props.isdark ? "light" : "dark"} `} href="/health">Health</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-${this.props.isdark ? "light" : "dark"} `} href="/science">Science</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-${this.props.isdark ? "light" : "dark"} `} href="/sports">Sports</a>
                </li>
                <li className="nav-item">
                  <a className={`nav-link text-${this.props.isdark ? "light" : "dark"} `} href="/technology">Technology</a>
                </li>


              </ul>


            </div>
          </div>
          <div className="form-check form-switch ">
            <input className="form-check-input  " onClick={this.props.mode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label text-${this.props.isdark?"light":"dark"} `} htmlFor="flexSwitchCheckDefault">mode</label>
          </div>
        </nav>

      </div>
    )
  }
}

export default navbar
