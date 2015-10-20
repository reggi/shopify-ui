import React, {PropTypes} from 'react'
import filterProps from './helpers/filterProps'

let ShopifyTableHead = (props) => (
  <thead {...filterProps(props, 'thead')}>
    <tr {...filterProps(props, 'tr')}>
      {props.children || props.text || '' }
    </tr>
  </thead>
)

ShopifyTableHead.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string
}

export default ShopifyTableHead
