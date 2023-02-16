import styled from 'styled-components';

export const HorizontalSection = styled.div`
    div {
        padding-top: ${(props) => props.theme.sectionSpacing};
        padding-bottom: ${(props) => props.theme.sectionSpacing};
        padding-left: ${(props) => props.theme.pageGutter};
        padding-right: ${(props) => props.theme.pageGutter};

        .sectionContent {
            color: ${(props) => props.theme.notQuiteBlack};
            display: flex;
            flex-flow: column;
            justify-content: flex-start;
            padding: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin: auto;

            h2 {
                font-size: 48px;
                line-height: 120%;
                font-weight: 800;
                font-family: ${(props) => props.theme.sourceSansProFont};
            }

            p {
                margin-top: 24px;
                font-size: clamp(16px, 2vw, 20px);
                line-height: 1.625;
                font-family: ${(props) => props.theme.oxygenFont};
            }
        }
    }
`;
