import React from 'react'
import RadioItem from './radio-item'
import uniqueId from 'lodash.uniqueid'

const cssList = {
  listStyle: 'none'
}

const cssItem = {
  paddingBottom: '2px'
}

export const RadioGroup = ({
  groupName = '',
  items = [],
  selectedValue,
  onSelection
}) => {
  return (
    <ul style={cssList}>
      {items.map(({ label, value }) => (
        <li style={cssItem} key={uniqueId(`RG_${groupName}_`)}>
          <RadioItem
            isChecked={selectedValue === value}
            label={label}
            name={groupName}
            value={value}
            key={uniqueId(`RG_${groupName}_`)}
            onChange={() => onSelection(value)}
          />
        </li>
      ))}
    </ul>
  )
}

export default RadioGroup
