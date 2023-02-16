import styled from 'styled-components';

export const HeadingButtonLink = styled.a`
    font-size: 14px;
    border-radius: 40px;
    padding: 8px 16px;
    cursor: pointer;
    background: white;
    text-decoration: none;
    color: ${(props) => props.theme.notQuiteBlack};
    transition-property: ${(props) => props.theme.bgHoverTransitionProperty};
    transition-duration: ${(props) => props.theme.bgHoverTransitionDuration};
    transition-timing-function: ${(props) =>
        props.theme.bgHoverTransitionTimingFunction};

    &:hover {
        color: ${(props) => props.theme.brandBlue};
        box-shadow: ${(props) => props.theme.bgHoverBoxShadow};
    }
`;
