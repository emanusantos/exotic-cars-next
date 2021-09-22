import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding: 1.5rem;
    box-shadow: 0 0.63rem 1.9rem #0000001a;
`;

type WrapperProps = {
    colored?: boolean;
    marginRight?: string;
};

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    background-color: ${(props) => (props.colored ? '#F3F1FC' : '')};
    padding: ${(props) => (props.colored ? '.2rem 0 .2rem 1.5rem' : '')};
    border-radius: 1.1rem;
    margin-right: ${(props) => props.marginRight};
`;

export const Title = styled.h2`
    color: #313136;
    font-weight: 600;
    letter-spacing: 0.07rem;
    cursor: default;
`;

export const Subtitle = styled.h4`
    color: #313136;
    margin-bottom: 0.2rem;
    font-weight: normal;
    align-self: flex-end;
    letter-spacing: 0.05rem;
    cursor: default;
`;

type ButtonProps = {
    primary?: boolean;
};

export const Button = styled.button<ButtonProps>`
    font-family: 'Segoe UI';
    color: #7b89f4;
    background-color: #fff;
    padding: ${(props) => (props.primary ? '.2rem .8rem' : '0')};
    border: ${(props) => (props.primary ? '.13rem solid #7B89F4' : 'none')};
    border-radius: 0.9rem;
    font-weight: bold;
    margin-right: 1rem;
    cursor: pointer;
`;

export const Text = styled.p`
    font-size: 0.75rem;
    color: #656469;
    font-weight: 600;
    cursor: default;
`;