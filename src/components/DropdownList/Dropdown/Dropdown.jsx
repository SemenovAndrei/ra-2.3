import React from 'react'
import './Dropdown.css'
import PropTypes from 'prop-types'

function Dropdown(props) {
  const onToggle = e => {
    props.showList && e.target.blur()
    props.onToggle(props.showList)
  }
  return (
    <button className="dropdown__btn" onClick={onToggle}>
      account settings
    </button>
  )
}

Dropdown.propTypes = {
  onToggle: PropTypes.func.isRequired,
}

export default Dropdown
