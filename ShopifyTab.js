import React, {PropTypes} from 'react'

let ShopifyTab = (props) => {
  let {className, children, active, text, href} = props
  className += ' next-tab'
  if (active) className += ' next-tab--is-active'
  const aProps = {className, children, active, text, href, ...props}
  return (
    <li>
      <a className={className} {...aProps}>
        {children || text}
      </a>
    </li>
  )
}

ShopifyTab.propTypes = {
  active: PropTypes.bool,
  href: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node
}

export default ShopifyTab
