import React, { PropTypes } from 'react'

import './Button';

class Button extends React.Component {
  render () {
    const {
      label,
      onClick
    } = this.props;

    return <button onClick={onClick}>{ label }</button>
  }
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired
}


export default Button;
