import { ContentContainer } from './ContentContainer';
import styled from 'styled-components';

export const SectionContentContainer = styled(ContentContainer)`
    display: grid;
    grid-template-columns: repeat(
        ${(props) => props.theme.numGridColumns},
        1fr
    );
    gap: 0 20px;
`;
