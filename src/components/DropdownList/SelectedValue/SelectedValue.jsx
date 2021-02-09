import React from 'react'
import PropTypes from 'prop-types'
import './SelectedValue.css'

function SelectedValue(props) {
  return (
    <div className="selectedValue">
      Вы выбрали : <span className="selected">{props.selected}</span>
    </div>
  )
}

SelectedValue.propTypes = {
  selected: PropTypes.string,
}

export default SelectedValue
