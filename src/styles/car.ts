import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 18.15rem;
    height: 13.75rem;
    background-color: #f8f8fa;
    border-radius: 1.25rem;
    padding: 1rem;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        transition-duration: 0.4s;
    }
`;

type Props = {
    primary?: boolean;
};

export const Wrapper = styled.div<Props>`
    display: flex;
    justify-content: ${(props) => (props.primary ? 'space-between' : '')};
    align-self: ${(props) => (props.primary ? '' : 'flex-end')};
`;

export const Title = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

export const Subtitle = styled.div`
    font-size: 1rem;
    font-weight: 300;
`;

type PriceProps = {
    footer?: boolean;
};

export const Price = styled.p<PriceProps>`
    font-size: 0.9rem;
    font-weight: ${(props) => (props.footer ? 400 : 'bold')};
    align-self: ${(props) => (props.footer ? 'flex-end' : '')};
`;