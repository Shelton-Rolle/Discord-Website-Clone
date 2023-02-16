import styled from 'styled-components';
import { HorizontalSection } from './HorizontalSection';

export const ReverseHorizontalSection = styled(HorizontalSection)`
    background-color: ${(props) => props.theme.backgroundColor};

    div {
        svg {
            grid-column: 6 / span 7;
            max-width: 678px;
            max-height: 440px;
        }

        .sectionContent {
            grid-column: span 4;
        }
    }
`;
