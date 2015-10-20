import React, {PropTypes} from 'react'

let ShopifyTable = ({children}) => (
  <div className='next-card__section custom-bg-white'>
    <div className='table-wrapper'>
      <table className='table-hover expanded'>
        {children}
      </table>
    </div>
  </div>
)

ShopifyTable.propTypes = {
  children: PropTypes.node.isRequired
}

export default ShopifyTable
