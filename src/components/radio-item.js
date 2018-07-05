import React from 'react'

const RadioItem = ({ label, name, isChecked, value, onChange }) => {
  return (
    <label>
      <input type='radio' name={name} checked={isChecked} value={value} onChange={onChange} />
      <span style={{ paddingLeft: '5px' }}>{label}</span>
    </label>
  )
}

export default RadioItem
