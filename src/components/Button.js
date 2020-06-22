import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../styles/variables'

const StyledButton = styled.button`
  width: ${props => props.width};
  height: 50px;
  background: ${props => props.disabled ? colors.gray_light : props.background};
  border-width: 2px;
  border-color: ${props => props.border};
  border-radius: 4px;
  outline: none;
  color: ${props => props.disabled ? colors.gray : props.color};
  &:hover {
    filter: ${props => props.disabled ? 'brightness(100%)' : 'brightness(90%)'};
  }
  &:active { filter: brightness(110%); }

  ${props => props.outline && css`
    background: ${props => props.background};
    border-color: ${props => props.disabled ? colors.gray :  props.border};
    color: ${props => props.disabled ? colors.gray : props.color};
    &:hover { background: ${props => props.disabled ? colors.white : props.hover}; }
  `}

  ${props => props.link && css`
    background: ${props => props.background};
    border-color: ${props => props.border};
    color: ${props => props.disabled ? colors.gray : props.color};
    &:hover {
      filter: brightness(100%);
      text-decoration: ${props => props.disabled ? 'none' : 'underline'};
    }
  `}
`

const Button = ({ value, size, color, variant, disabled }) => {

  const setWidth = size  => {
    if (size === 'small') return '120px'
    if (size === 'medium') return '210px'
    return size
  }

  const setColor = color => {
    if (color === 'primary') return colors.green
    if (color === 'secondary') return colors.purple
    if (color === 'danger') return colors.red
    return color
  }

  const setHover = color => {
    if (color === 'primary') return colors.green_shadow
    if (color === 'secondary') return colors.purple_shadow
    if (color === 'danger') return colors.red_shadow
    
  }

  if (variant === 'solid') return (
    <StyledButton
      width={setWidth(size)}
      background={setColor(color)}
      border={setColor('transparent')}
      color='white'
      disabled={disabled}
    >
      {value}
    </StyledButton> 
  )

  if (variant === 'outline') return (
    <StyledButton
      width={setWidth(size)}
      background={setColor('white')}
      border={setColor(color)}
      color={setColor(color)}
      outline={true}
      hover={setHover(color)}
      disabled={disabled}
    >
      {value}
    </StyledButton> 
  )

  if (variant === 'link') return (
    <StyledButton
      width={setWidth(size)}
      background={setColor('white')}
      border={setColor('transparent')}
      color={setColor(color)}
      link={true}
      disabled={disabled}
    >
      {value}
    </StyledButton> 
  )

}

export default Button
