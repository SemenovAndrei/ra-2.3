import './App.css'
import React, { useState } from 'react'

import { nanoid } from 'nanoid'

import DropdownList from './components/DropdownList/DropdownList'
import SelectedValue from './components/DropdownList/SelectedValue/SelectedValue'

function App() {
  const data = ['profile information', 'change password', 'become PRO', 'help', 'log out']

  const [selected, setSelected] = useState('')

  const dataWithId = data.map(e => {
    return {
      value: e,
      id: nanoid(),
    }
  })

  const onGetSelected = value => {
    setSelected(value)
  }

  return (
    <div className="App">
      {selected && <SelectedValue selected={selected} />}
      <DropdownList data={dataWithId} onGetSelected={onGetSelected} />
    </div>
  )
}

export default App
