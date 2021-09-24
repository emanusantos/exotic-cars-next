import styled from 'styled-components';

export const Container = styled.div`
    padding: 2.5rem 6rem;
    background: transparent linear-gradient(125deg, #fff, #d8d7d7);
`;

export const Title = styled.p`
    font-size: 3rem;
    font-weight: bold;
`;

export const Arrow = styled.button`
    height: 50%;
    align-self: center;
    padding: 0.6rem 0.5rem;
    background-color: #313136;
    border-radius: 2.5rem;
    border: none;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
        filter: brightness(1.1);
        transition-duration: 0.3s;
    }
`;

export const CatalogButton = styled.button`
    background-color: transparent;
    font-size: 1rem;
    font-weight: 300;
    color: #313136;
    display: flex;
    align-items: center;
    gap: 0.1rem;
    height: 50%;
    align-self: center;
    border: 0.01rem solid #313136;
    padding: 1rem;
    border-radius: 1.5rem;
    margin-right: 3rem;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        filter: brightness(2);
        transition-duration: 0.3s;
    }
`;

export const BookButton = styled.button`
    display: flex;
    gap: 1rem;
    color: #ffffff;
    padding: 1rem 2rem;
    align-self: center;
    font-size: 1rem;
    background-color: #313136;
    border: none;
    border-radius: 1.7rem;
    cursor: pointer;
    &:hover {
        transform: scale(1.2);
        filter: brightness(0.8);
        transition-duration: 0.3s;
    }
`;