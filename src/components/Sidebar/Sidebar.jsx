import React from 'react'
import { Link } from 'react-router-dom'

let menu = [
  {
    title: 'Menu',
    label: true
  },
  {
    title: 'Dashboard',
    label: false,
    url: '/dashboard',
    icon: 'tachometer'
  },
  {
    title: 'Task',
    label: false,
    url: '/task',
    icon: 'tasks'
  },
  {
    title: 'Team',
    label: false,
    url: '/task',
    icon: 'users'
  },
  {
    title: 'Assesment',
    label: false,
    url: '/task',
    icon: 'trophy'
  },
  {
    title: 'Analytic',
    label: false,
    url: '/task',
    icon: 'line-chart'
  }
]

function linkOrLabel (i) {
  if (i.url) {
    return (<Link to={i.url}>{i.title}</Link>)
  }

  return i.title
}

export default () => (
  <div className="sidebar">
    <div className="brand">
      Black Panther
      <span><a href="#!">Switch Team</a></span>
    </div>
    <hr/>
    <div className="list-group">
      {menu.map((i,idx) => (
        <span key={idx} className={`list-group-item ${i.label ? 'label' : ''}`}>
          {i.icon ? <span className="icon"><i className={`fa fa-${i.icon}`}></i></span> : ''}
          {linkOrLabel(i)}
        </span>
      ))}
    </div>
  </div>
)