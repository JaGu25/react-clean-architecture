import React from 'react'
import InputSearchStyled from './InputSearch.styled'

interface IProps {}

const InputSearch : React.FC<IProps> = () => {
    return (
        <InputSearchStyled.InputSearch placeholder='Buscar...'/>
    )
}

export default InputSearch
