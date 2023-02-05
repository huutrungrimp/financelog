import React from 'react'
import Income from './dashboard/Income'

export default function FinanceDB() {
  return (
    <div className='financeDB'>
      <div className='row mt-md-4 gx-0'>
        <div className='col-xs-12 col-md-2'>
          <h4>Income</h4>
        </div>
        <div className='col-xs-12 col-md-10'>
          <Income />
        </div>
      </div>
    </div>
  )
}
