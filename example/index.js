import React from 'react'
import ReactDOM from 'react-dom'
import {ShopifyTabs, ShopifyContainer, ShopifySearchFilter} from '../index'

let Demo = () => {
  return (
    <ShopifyContainer>
      <ShopifyTabs tabs={[
        {
          text: 'Hello',
          active: true
        },
        {
          text: 'World',
          active: false
        }
      ]}/>
      <ShopifySearchFilter inputPlaceholder='Hello World'/>
    </ShopifyContainer>
  )
}

ReactDOM.render(<Demo/>, document.getElementById('react-content'))
