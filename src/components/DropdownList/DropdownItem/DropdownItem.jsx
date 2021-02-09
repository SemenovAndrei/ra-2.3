import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './DropdownItem.css'

function DropdownItem(props) {
  const items = props.items.map(item => (
    <li
      key={item.id}
      className={classnames('dropdownItem', { selected: props.selected === item.value })}
    >
      {item.value}
    </li>
  ))

  const onSelect = e => {
    props.onSelect(e)
  }

  return (
    <ul className="dropdownList__list" onClick={onSelect}>
      {items}
    </ul>
  )
}

DropdownItem.propTypes = {
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
}

export default DropdownItem
