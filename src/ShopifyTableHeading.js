import React from 'react'

let ShopifyTableHeading = (props) => {
  let {text, children} = props
  let thProps = {text, children, ...props}
  return (
    <th {...thProps}>
      {children || text || ''}
    </th>
  )
}

export default ShopifyTableHeading
