import styled from 'styled-components';

export const LanguageAndMedia = styled.div`
    grid-column: span 2;

    h3 {
        color: ${(props) => props.theme.brandBlue};
        font-family: ${(props) => props.theme.luckiestGuyFont};
        line-height: 95%;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 32px;
    }
`;
