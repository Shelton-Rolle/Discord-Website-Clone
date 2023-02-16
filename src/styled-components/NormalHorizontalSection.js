import styled from 'styled-components';
import { HorizontalSection } from './HorizontalSection';

export const NormalHorizontalSection = styled(HorizontalSection)`
    div {
        svg {
            grid-column: span 7;
            max-width: 678px;
            max-height: 440px;
        }

        .sectionContent {
            grid-column: 9 / span 4;
        }
    }
`;
