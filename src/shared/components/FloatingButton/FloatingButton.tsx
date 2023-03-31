import React from 'react'
import FloatingButtonStyled from './FloatingButton.styled'

interface IProps {
  onClick: () => void
}

const FloatingButton : React.FC<IProps> = ({ onClick }) => {
  return (
    <FloatingButtonStyled.ContainerButton onClick={onClick}>
      <FloatingButtonStyled.IconPlus className='fa-plus'/>
    </FloatingButtonStyled.ContainerButton>
  )
}

export default FloatingButton
