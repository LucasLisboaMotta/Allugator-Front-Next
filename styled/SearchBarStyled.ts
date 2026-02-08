import styled from 'styled-components';

const SearchBarStyled = styled.div`
    display: flex;
    align-items: center;
    input {
            padding: 0.5rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-right: 0.5rem;
        }
            button {
            padding: 0.5rem 1rem;
            background-color: #0070f3;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            &:hover {
                background-color: #005bb5;
            }
        }
`

export default SearchBarStyled;