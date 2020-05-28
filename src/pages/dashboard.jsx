import React from 'react'
import Layout from '../layouts/MainLayout'

let page = {
  title: 'Dashboard',
  subtitle: '',
  links: [
    {
      title: 'Settings',
      url: '#!',
      icon: 'cog'
    },
    {
      title: 'Analytics',
      url: '#!',
      icon: 'line-chart'
    }
  ]
}

export default function dashboard () {
  return (
    <Layout page={page}>
      <div className="container">
        <div className="row">
          <div className="col-12 my-3">
            <div className="card-columns">
              <div className="card">
                <div className="card-body">
                  <h4>Pinned Notes</h4>
                  <ul>
                    <li>
                      <a href="#!">Notulen Rapat UC</a>
                    </li>
                    <li>
                      <a href="#!">Daftar Link BP</a>
                    </li>
                    <li>
                      <a href="#!">All notes...</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4>Task On Proggress</h4>
                  <div className="list-group">
                    <a href="#!" className="list-group-item list-group-item-action my-1">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptates.
                          </a>
                    <a href="#!" className="list-group-item list-group-item-action my-1">Dapibus ac facilisis in</a>
                    <a href="#!" className="list-group-item list-group-item-action my-1">Morbi leo risus</a>
                    <a href="#!" className="list-group-item list-group-item-action my-1">Porta ac consectetur ac</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h4>Task Open</h4>
                  <div className="list-group">
                    <a href="#!" className="list-group-item list-group-item-action my-1">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, voluptates.
                          </a>
                    <a href="#!" className="list-group-item list-group-item-action my-1">Dapibus ac facilisis in</a>
                    <a href="#!" className="list-group-item list-group-item-action my-1">Morbi leo risus</a>
                    <a href="#!" className="list-group-item list-group-item-action my-1">Porta ac consectetur ac</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}