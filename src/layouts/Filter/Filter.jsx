import React from 'react'
import Select from '../../components/Form/Select'

export default (props) => {
  return (
    <div id="filter-box" className="form-row mb-3 transition hidden">
      {props.items.map((i,x) => {
        return (
          <div key={x} className="col-lg-3">
            <label htmlFor={i.id}><strong>{i.title}</strong></label>
            <Select {...i.select}></Select>
          </div>
        )
      })}
    </div>
  )
}