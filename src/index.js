import PropTypes from 'prop-types'
import { compose, withState, withHandlers, lifecycle } from 'recompose'
import RadioGroup from './components/radio-group'

export const handlers = {
  onSelection: props => newSelection => props.setSelectedValue(newSelection)
}

export const lifecycleMethods = {
  componentDidUpdate () {
    this.props.onSelectionChange(this.props.selectedValue)
  }
}

const recomposed = compose(
  withState('selectedValue', 'setSelectedValue', ''),
  withHandlers(handlers),
  lifecycle(lifecycleMethods)
)(RadioGroup)

recomposed.propTypes = {
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

export default recomposed
