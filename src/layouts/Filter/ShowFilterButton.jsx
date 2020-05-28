import React from 'react'

const showFilter = () => {
  const filterBox = document.getElementById('filter-box')
  filterBox.classList.toggle('hidden')
}

const component = active => {
  if (active) {
    return (
      <a href="#!" className="btn btn-primary btn-sm" onClick={() => showFilter()}>
        <i className="fa fa-filter"></i>
        Show Filter
      </a>
    )
  }
  
  return
}

export default (props) => {
  return component(props.active)
}