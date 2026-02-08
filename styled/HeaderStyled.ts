import styled from 'styled-components';

const HeaderStyled =  styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 1rem;
    background-color: #f5f5f5;
    border-bottom: 1px solid #ddd;
    a {
        text-decoration: none;
        color: #333;
        margin: 0 1rem;
        font-weight: bold;
        &:hover {
            color: #0070f3;
        }
    }
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
`

export default HeaderStyled;