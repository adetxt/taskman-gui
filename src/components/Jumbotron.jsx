import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  let links = props.links || []

  return (
    <div className={`jumbotron jumbotron-fluid ${props.fluidBody ? '' : 'for-non-fluid-body'}`}>
      <div className="container">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.subtitle}</p>

        <div className="link-vertical">
          
          {links.map((i,idx) => {
            if (i.outer) {
              return (
                <a key={idx} href={i.url} target="_blank" rel="noopener noreferrer" className="link-item">
                  <span className="icon">
                    <i className={`fa fa-${i.icon}`}></i>
                  </span>
                  {i.title}
                </a>
              )
            }

            return (
              <Link key={idx} to={i.url} className="link-item">
                <span className="icon">
                  <i className={`fa fa-${i.icon}`}></i>
                </span>
                {i.title}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}