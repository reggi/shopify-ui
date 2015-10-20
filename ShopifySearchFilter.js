import React from 'react'
import filterProps from './helpers/filterProps'

var ShopifyFilterInput = (props) => {
  let formProps = filterProps(props, 'form')
  let labelProps = filterProps(props, 'label')
  let inputProps = filterProps(props, 'input')
  if (!labelProps.htmlFor && inputProps.id) inputProps.id = labelProps.htmlFor
  if (!inputProps.id && labelProps.htmlFor) labelProps.htmlFor = inputProps.id
  return (
    <div className='next-card__section next-card__section--no-bottom-spacing' style={{backgroundColor: '#fff'}}>
      <div className='obj-filter hide-when-printing table-filter-container show-saved-search-actions'>
        <div className='next-input-wrapper'>
          <div className='next-field__connected-wrapper'>
            <form acceptCharset='UTF-8' className='next-form next-form--full-width' {...formProps}>
              <label className='next-label helper--visually-hidden' {...labelProps}/>
              <div className='next-input--stylized next-field--connected'>
                <span className='next-input__add-on next-input__add-on--before'></span>
                <input className='next-input next-input--invisible' type='text' {...inputProps}/>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopifyFilterInput
