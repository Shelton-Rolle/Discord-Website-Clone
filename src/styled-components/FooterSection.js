import styled from 'styled-components';

export const FooterSection = styled.section`
    background: ${(props) => props.theme.notQuiteBlack};
    color: white;

    #container {
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(
            ${(props) => props.theme.numGridColumns},
            1fr
        );
        gap: 0 20px;
        max-width: ${(props) => props.theme.maxContainerWidth};
        padding: 80px 40px 64px;

        #signup-cta {
            padding-top: 32px;
            grid-column: span 12;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid ${(props) => props.theme.brandBlue};

            div {
                a {
                    &:hover {
                        background-color: hsl(235, 86.1%, 71.8%);
                    }
                }
            }
        }
    }
`;
