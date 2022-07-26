import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
    }

    body {
        background: ${(props) => props.theme.white};
        color: ${(props) => props.theme['text-gray']};
        -webkit-font-smoothing: antialiased;
        position: relative;
    }

    body, input, textarea, button {
        font-family: 'Work sans', sans-serif;
        font-weight: 400;
        font-size: 1.3125rem;
    }

    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 3.25rem;
        
    }

`
