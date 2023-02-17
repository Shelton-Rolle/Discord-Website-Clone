import styled from 'styled-components';

export const FooterSection = styled.section`
    display: grid;
    grid-template-columns: repeat(
        ${(props) => props.theme.numGridColumns},
        1fr
    );
    gap: 0 20px;
    margin: 0 auto;
    max-width: ${(props) => props.theme.maxContainerWidth};
    padding: ${(props) => props.theme.sectionSpacing} 40px;
`;
