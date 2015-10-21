import React from 'react'

let ShopifyTableData = (props) => {
  var {text, children} = props
  var tdProps = {text, children, ...props}
  return (
    <td {...tdProps}>
      {children || text || ''}
    </td>
  )
}

export default ShopifyTableData
