import React, {PropTypes} from 'react'
import filterProps from './helpers/filterProps'

let ShopifyTable = (props) => {
  let rootProps = filterProps(props, 'root')
  let tableProps = filterProps(props, 'table')
  return (
    <div className='next-card__section custom-bg-white' {...rootProps}>
      <div className='table-wrapper'>
        <table className='table-hover expanded' {...tableProps}>
          {props.children}
        </table>
      </div>
    </div>
  )
}

ShopifyTable.propTypes = {
  children: PropTypes.node.isRequired
}

export default ShopifyTable
