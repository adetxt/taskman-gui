import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import Jumbotron from '../components/Jumbotron'

function body (bodyType = false, children) {
  if (bodyType) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
              {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-11">
          <div className="card card-content">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default (props) => {
  return (
    <div>
      <div className="sidebar-wrapper">
        <Sidebar></Sidebar>
      </div>
      <div className="body-wrapper">
        <Navbar></Navbar>
        <div className="content">
          <Jumbotron title={props.page.title} fuildBody={props.page.fluidBody} subtitle={props.page.subtitle} links={props.page.links}></Jumbotron>

          {body(props.page.fluidBody, props.children)}
        </div>

        <div className="footer text-center">
          <strong>By Black Panther Team</strong>
        </div>
      </div>
    </div>
  )
}