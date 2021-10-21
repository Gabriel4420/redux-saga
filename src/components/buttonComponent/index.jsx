import React from 'react'

import { ButtonTyped } from './style'

function ButtonComponent(props) {
  return (
    <ButtonTyped
      theme={props.theme}
      value={props.value}
      bordered={props.bordered}
      onClick={props.onClick}
    >
      {props.value}
    </ButtonTyped>
  )
}

export default ButtonComponent
