import React from 'react'
import GitHubStyled from './Github.styled'

const GitHub = () => {
    return (
        <GitHubStyled.Wrapper>
            <GitHubStyled.Icon
                title='My GitHub'
                onClick={() => window.open('https://github.com/JaGu25')}
                className='fa-brands fa-github' />
        </GitHubStyled.Wrapper>
    )
}

export default GitHub
