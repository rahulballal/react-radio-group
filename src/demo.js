import React from 'react'
import { hydrate } from 'react-dom'
import RadioGroup from './index'

const fruits = [
  { label: 'Mango', value: 'MANGO' },
  { label: 'Apple', value: 'APPLE' },
  { label: 'Orange', value: 'ORANGE' },
  { label: 'Cherry', value: 'CHERRY' }
]

hydrate(
  <RadioGroup
    items={fruits}
    groupName={'fruits'}
    selectedValue=''
    onSelectionChange={console.info}
  />,
  document.getElementById('app')
)
