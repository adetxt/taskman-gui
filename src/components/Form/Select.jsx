import React from 'react'

export default (props) => {
  return (
    <select className="custom-select">
      <option defaultValue>{props.title}</option>
      {props.items.map((i,x) => (
        <option key={x} value={i.value}>{i.text}</option>
      ))}
    </select>
  )
}