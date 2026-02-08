import styled from "styled-components";

export const ProductStyled = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    margin: 2rem 0;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
    a {
        display: flex;
        flex-direction: column;
        height: 100%;
        text-decoration: none;
        color: inherit;
    }
    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    img {
        width: 100%;
        max-width: 220px;
        height: 220px;
        object-fit: cover;
        display: block;
        margin: 0 auto;
        border-radius: 12px;
    }
    p {
        margin-top: auto;
        padding-top: 0.75rem;
        font-weight: 600;
    }
`;

export const ProductBoxStyled = styled.div`
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
    align-items: stretch;
`

export const ProductDetailStyled = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    h1 {
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 0.5rem;
    }
    img {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
        margin-top: 1rem;
    }
`

export const ProductDetailCartStyled = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    gap: 0.75rem;
    align-items: center;
    button {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
        background-color: #0070f3;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        &:hover {
            background-color: #005bb5;
        }
        &.remove {
            background-color: #e00;
            &:hover {
                background-color: #c00;
            }
        }
    }
    > div:first-child button {
        background-color: #e00;
        &:hover {
            background-color: #c00;
        }
    }
    > div:nth-child(2) {
        font-weight: 600;
        color: #111;
        background: #f5f7ff;
        padding: 0.35rem 0.6rem;
        border-radius: 6px;
        border: 1px solid #e0e7ff;
        text-align: center;
        white-space: nowrap;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        button {
            width: 100%;
            margin-bottom: 0.5rem;
        }
        button:last-child {
            margin-bottom: 0;
        }
    }
`

export const ProductDetailCarouselStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    gap: 0.75rem;
    button {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        &:hover {
            color: #0070f3;
        }
    }
    img {
        max-width: 100%;
        height: auto;
        border-radius: 12px;
        margin: 0;
    }
`

export const ProductDetailCarouselButtonsStyled = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    margin-top: 0.5rem;
    width: 100%;
    gap: 0.75rem;
    button {
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        &:hover {
            color: #0070f3;
        }
    }
    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
    }
    img {
        width: 72px;
        height: 72px;
        object-fit: cover;
        border-radius: 8px;
        margin: 0 0.25rem;
        border: 2px solid transparent;
        &.active {
            border-color: #0070f3;
        }
    }
`