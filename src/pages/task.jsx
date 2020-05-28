import React, { useEffect } from 'react'

import Layout from '../layouts/MainLayout'
import Filter from '../layouts/Filter/Filter'
import ShowFilterButton from '../layouts/Filter/ShowFilterButton'

import Table from '../components/Table/Table'
import Card from '../components/Table/Card'

import movies from '../components/Table/dummy'

let page = {
  title: 'My Task',
  subtitle: 'Collection of your own tasks',
  links: [
    {
      title: 'My Task',
      url: '#!',
      icon: 'calendar-check-o'
    },
    {
      title: 'Project',
      url: '/scrum',
      icon: 'clipboard'
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

const tableColumns = [
  {
    name: "Status",
    selector: "status",
    sortable: true,
    cell: row => (<strong>{transformStatus(row.status)}</strong>)
  },
  {
    name: "Title",
    selector: "title",
    grow: 2,
    sortable: true
  },
  {
    name: "End Date",
    selector: "endDate",
    sortable: true,
    center: true
  },
  {
    name: "Type",
    selector: "type",
    sortable: true,
    center: true,
    cell: row => (<strong>{row.type}</strong>)
  },
  {
    name: "Module",
    selector: "modul",
    sortable: true,
    center: true,
    cell: row => (<strong>{row.modul}</strong>)
  },
  {
    name: 'Action',
    sortable: false,
    center: true,
    cell: row => (<div>
      <a href="#!" className="btn btn-sm btn-primary ml-1"><i className="fa fa-eye"></i></a>
      <a href="#!" className="btn btn-sm btn-danger ml-1"><i className="fa fa-trash"></i></a>
    </div>),
  },
]

let tableItem = {
  columns: tableColumns,
  data: movies
}

function transformStatus(status) {
  switch (status.toLowerCase()) {
    case 'progress':
      return (<span className="badge badge-pill badge-warning">{status}</span>)
    case 'done':
      return (<span className="badge badge-pill badge-success">{status}</span>)
    default:
      break;
  }
}

export default () => {

  useEffect(() => {
    document.title = 'My Task'
  })

  return (
    <Layout page={page}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 p-3">
            <ShowFilterButton active={filter.active}></ShowFilterButton>
            <a href="#!" className="btn btn-primary btn-sm float-right"><i className="fa fa-plus"></i> Add New</a>
          </div>
          <div className="col-12">
            <Filter active={filter.active} items={filter.items}></Filter>

            <nav>
              <div className="nav nav-tabs" id="nav-tab">
                <a className="nav-item nav-link" data-toggle="tab" href="#nav-tabular">Table</a>
                <a className="nav-item nav-link active" data-toggle="tab" href="#nav-card">Card</a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade" id="nav-tabular">
                <div className="table-wrapper py-3">
                  <Table item={tableItem}></Table>
                </div>
              </div>
              <div className="tab-pane fade show active" id="nav-card">
                <Card column="3" item={tableItem}></Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}