import React from 'react'

export default () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#!">
      <i className="fa fa-bars"></i>
    </a>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" />
    </form>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <a className="nav-item nav-link active" href="#!">Home</a>
        <a className="nav-item nav-link" href="#!">Features</a>
        <a className="nav-item nav-link" href="#!">Pricing</a>
      </div>
    </div>
  </nav>
)