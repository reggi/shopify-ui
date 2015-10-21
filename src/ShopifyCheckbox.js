import React from 'react'

let ShopifyCheckbox = (props) => (
  <div style={{position: 'relative'}}>
    <input className='next-checkbox' type='checkbox' {...props}/>
    <span className='next-checkbox--styled'/>
  </div>
)

export default ShopifyCheckbox
