import React from 'react'
import Pagination from './Pagination'

export default (props) => {
  let data = props.item.data
  let columns = props.item.columns

  return (
    <div className="row">
      {data.map((i,idx) => {
        let color = 'primary'

        switch (i.status.toLowerCase()) {
          case 'progress':
            color = 'warning';break
          case 'done':
            color = 'success';break
          default:
            color = 'primary';break
        }

        return (
          <div key={idx} className={`col-lg-${12/props.column} my-3`}>
            <div className="card">
              <div className={`card-header bg-${color}`} style={{ height: '2px', padding: '0' }}></div>
              <div className="card-body">
                <table>
                  <tbody>
                    {columns.map((x, xidx) => {
                      let val = ''

                      if (x.cell) {
                        val = x.cell(i)
                      } else {
                        val = i[x.selector]
                      }

                      return (
                        <tr key={xidx}>
                          <td width="100" valign="top"><strong>{x.name}</strong></td>
                          <td width="10" valign="top"> : </td>
                          <td>{val}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )
      })}

      <div className="col-12">
        <Pagination></Pagination>
      </div>
    </div>
  )
}