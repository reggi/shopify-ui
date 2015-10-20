import React, {PropTypes} from 'react'

let ShopifyContainer = ({children}) => (
  <div className='next-grid next-grid--outer-grid'>
    <div className='next-grid__cell'>
      {children}
    </div>
  </div>
)

ShopifyContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default ShopifyContainer
