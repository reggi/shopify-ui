import React, {PropTypes} from 'react'
import ShopifyTab from './ShopifyTab'

let ShopifyTabs = ({tabs, children}) => {
  let value
  if (children) {
    value = (children)
  } else if (tabs) {
    value = tabs.map(function (tab, index) {
      return <ShopifyTab {...tab} key={index}/>
    })
  }
  return (
    <ul className='next-tab__list'>
      {value}
    </ul>
  )
}

ShopifyTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(ShopifyTab.propTypes)),
  children: PropTypes.node
}

export default ShopifyTabs
