import React from 'react'
import PropTypes from 'prop-types'
import RadioGroup from './components/radio-group'

export default class extends React.PureComponent {
  state = { selectedValue: this.props.selectedValue }

  static propTypes = {
    onSelectionChange: PropTypes.func.isRequired,
    groupName: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    ),
    selectedValue: PropTypes.string.isRequired
  }

  handleSelection = newSelection =>
    this.setState(() => ({ selectedValue: newSelection }))

  componentDidUpdate () {
    this.props.onSelectionChange(this.state.selectedValue)
  }

  render () {
    const { groupName, items } = this.props
    const { selectedValue } = this.state

    return (
      <RadioGroup
        groupName={groupName}
        items={items}
        selectedValue={selectedValue}
        onSelection={this.handleSelection}
      />
    )
  }
}
