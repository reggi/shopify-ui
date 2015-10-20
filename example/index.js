import React from 'react'
import ReactDOM from 'react-dom'
import {ShopifyTabs, ShopifyContainer, ShopifySearchFilter, ShopifyTableFlat} from '../index'

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
      <ShopifyTableFlat headings={[
        {
          prop: 'animal',
          text: 'Animal'
        },
        {
          prop: 'age',
          text: 'Age'
        }
      ]} rows={[
        {
          animal: 'Tiger',
          age: 29
        },
        {
          age: 19,
          animal: 'Pengunin'
        }
      ]}/>
    </ShopifyContainer>
  )
}

ReactDOM.render(<Demo/>, document.getElementById('react-content'))
