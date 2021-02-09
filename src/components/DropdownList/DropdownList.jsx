import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Dropdown from './Dropdown/Dropdown'
import './DropdownList.css'
import DropdownItem from './DropdownItem/DropdownItem'

function DropdownList(props) {
  const [showList, setShowList] = useState(false)
  const [selected, setSelected] = useState('')

  const onToggleList = () => {
    setShowList(!showList)
  }

  const onSelectItem = e => {
    setSelected(e.target.textContent)
    setShowList(!showList)
    props.onGetSelected(e.target.textContent)
  }

  return (
    <div>
      <Dropdown onToggle={onToggleList} showList={showList} />
      {showList && (
        <div className="dropdownList__container arrow_box">
          <DropdownItem items={props.data} onSelect={onSelectItem} selected={selected} />
        </div>
      )}
    </div>
  )
}

DropdownList.propTypes = {
  data: PropTypes.array.isRequired,
  onGetSelected: PropTypes.func,
}

export default DropdownList
