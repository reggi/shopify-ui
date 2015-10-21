import React from 'react'
import {
  ShopifyTable,
  ShopifyTableHead,
  ShopifyTableHeading,
  ShopifyTableBody,
  ShopifyTableRow,
  ShopifyTableData,
  ShopifyCheckbox
} from './index'

let ShopifyTableFlat = ({headings, rows}) => (
  <ShopifyTable rootStyle={{backgroundColor: '#fff'}}>
    <ShopifyTableHead>
      <ShopifyTableHeading>
        <ShopifyCheckbox/>
      </ShopifyTableHeading>
      {headings.map((heading, index) => (
        <ShopifyTableHeading status={heading.status} key={index}>
          {heading.text}
        </ShopifyTableHeading>
      ))}
    </ShopifyTableHead>
    <ShopifyTableBody>
      {rows.map((row, index) => (
        <ShopifyTableRow key={index}>
          <ShopifyTableData>
            <ShopifyCheckbox/>
          </ShopifyTableData>
          {headings.map((heading, index) => (
            <ShopifyTableData key={index}>{row[heading.prop]}</ShopifyTableData>
          ))}
        </ShopifyTableRow>
      ))}
    </ShopifyTableBody>
  </ShopifyTable>
)

export default ShopifyTableFlat
