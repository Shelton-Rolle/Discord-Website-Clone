import styled from 'styled-components';

export const HeadingButtonLink = styled.a`
    display: 'flex';
    align-items: 'center';
    gap: '10px';
    font-size: 14px;
    border-radius: 40px;
    padding: 8px 16px;
    cursor: pointer;
    background: ${(props) => props.theme.backgroundColor};
    text-decoration: none;
    color: ${(props) => props.theme.notQuiteBlack};
    transition-property: ${(props) => props.theme.bgHoverTransitionProperty};
    transition-duration: ${(props) => props.theme.bgHoverTransitionDuration};
    transition-timing-function: ${(props) =>
        props.theme.bgHoverTransitionTimingFunction};
    font-family: ${(props) => props.theme.oxygenFont};

    &:hover {
        color: ${(props) => props.theme.brandBlue};
        box-shadow: ${(props) => props.theme.bgHoverBoxShadow};
    }
`;
