import React from 'react'
import DataTable from 'react-data-table-component'

const customStyles = {
  rows: {
    style: {
      fontSize: '14px'
    }
  },
  headCells: {
    style: {
      fontSize: '13px',
      fontWeight: 600,
    }
  },
};

let pagination = {
  pagination: true,
  paginationPerPage: 5,
  paginationRowsPerPageOptions: [
    5, 10, 15, 20, 25, 30
  ]
}

export default (props) => {
  let data = props.item.data
  let columns = props.item.columns

  return (
    <div className="App">
      <div className="card">
        <DataTable
          title="Project Ciputra"
          columns={columns}
          data={data}
          customStyles={customStyles}
          defaultSortField="title"
          {...pagination}
        />
      </div>
    </div>
  );
}