import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">VNJOBs </a>
        <span className="ml-1">&copy; 2021 All right reserve.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://github.com/SinJunior" target="_blank" rel="noopener noreferrer">Tran Khac Tuan </a>
        & 
        <a href="https://github.com/HungThinh0710" target="_blank" rel="noopener noreferrer"> Nguyen Hung Thinh</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
