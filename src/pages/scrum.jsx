import React, {useEffect} from 'react'

import Layout from '../layouts/MainLayout'

import ShowFilterButton from '../layouts/Filter/ShowFilterButton';
import Filter from '../layouts/Filter/Filter';

import Table from '../components/Table/Table'

let page = {
  title: 'Project',
  subtitle: 'Detailed page about your scrum',
  links: [
    {
      title: 'My Task',
      url: '/task',
      icon: 'calendar-check-o'
    },
    {
      title: 'Project',
      url: '/scrum',
      icon: 'clipboard'
    },
    {
      title: 'All Tasks',
      url: '/scrum',
      icon: 'tasks'
    }
  ],
  fluidBody: true
}

let selectProject = {
  title: 'Select Project',
  items: [
    {
      text: 'Ciputra',
      value: 'uc'
    },
    {
      text: 'Product',
      value: 'product'
    }
  ]
}

let filter = {
  active: true,
  items: [
    {
      id: 'project',
      title: 'Project',
      select: selectProject
    },
    {
      id: 'module',
      title: 'Module',
      select: selectProject
    }
  ]
}

let tableItem = {
  columns: [
    {
      name: 'Name',
      selector: 'name'
    }
  ],
  data: [
    {
      name: 'Modul Pengisian'
    },
    {
      name: 'Modul Kepegawaian'
    }
  ]
}

export default () => {

  useEffect(() => {
    document.title = 'Scrum'
  })

  return (
    <Layout page={page}>
      <div className="container">
        <div className="row">
          <div className="col-12 p-3">
            <ShowFilterButton active={filter.active}></ShowFilterButton>
            <a href="#!" className="btn btn-primary btn-sm float-right"><i className="fa fa-plus"></i> Add New</a>
          </div>
          <div className="col-12">
            <Filter active={filter.active} items={filter.items}></Filter>
            <nav>
              <div className="nav nav-tabs" id="nav-tab">
                <a className="nav-item nav-link active" data-toggle="tab" href="#nav-sprint">Sprints</a>
                <a className="nav-item nav-link" data-toggle="tab" href="#nav-backlog">Product Backlog</a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-sprint">
                <h4 className="my-3">Project Ciputra</h4>
                <div className="row">
                  <div className="col-lg-6 col-xl-4 my-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between mb-2">
                          <h5>SPRINT 1</h5>
                          <a href="#!" className="btn btn-sm btn-primary"><i className="fa fa-plus"></i></a>
                        </div>
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
              <div className="tab-pane fade" id="nav-backlog">
                <div className="table-wrapper py-3">
                  <Table item={tableItem}></Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}