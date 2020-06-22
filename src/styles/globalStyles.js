import { createGlobalStyle } from 'styled-components'
import { fonts } from './variables'

export default createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 10px;
  }

  button {
    font-size: 1.6rem;
    font-weight: ${fonts.medium};
  }

`