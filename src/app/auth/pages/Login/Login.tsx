import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../../shared/components/Button/Button'
import { addUser, fetching, GlobalState, stopFetching } from '../../../../store/reducer'
import AuthService from '../../services/auth.service'
import LoginStyled from './Login.styled'

const Login = () => {

    const user = useSelector((state: GlobalState) => state.global.user)
    const dispatch = useDispatch()

    const handleLogin = async () => {
        try {
            dispatch(fetching())
            const user = await AuthService.login()
            dispatch(addUser(user))
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(stopFetching())
        }
    }

    return (
        <LoginStyled.LoginWrapper>
            <span>
                {JSON.stringify(user)}
            </span>
            <Button text='Login' onClick={handleLogin} />
        </LoginStyled.LoginWrapper>
    )
}

export default Login
