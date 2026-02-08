import styled from "styled-components";

const ShoppingCartStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    max-width: 800px;
    margin: 0 auto;
    background: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    h1 {
        margin: 0 0 0.5rem 0;
        font-size: 1.5rem;
        color: #111;
    }
    h2 {
        margin: 1rem 0 0;
        font-size: 1.25rem;
        color: #111;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    li {
        background: #fafafa;
        border: 1px solid #eee;
        border-radius: 10px;
        padding: 0.75rem;
    }
`

export const ShoppingCartItemStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 8px;
    }
    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
        flex: 1;
        h2 {
            margin: 0;
        }
    }
    .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;
        flex-wrap: wrap;
    }
    .actions {
        display: flex;
        gap: 0.5rem;
        button {
            border: none;
            color: #fff;
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            cursor: pointer;
        }
        .remove {
            background-color: #e00;
            &:hover {
                background-color: #c00;
            }
        }
        .add {
            background-color: #0070f3;
            &:hover {
                background-color: #005bb5;
            }
        }
    }
`

export default ShoppingCartStyled;