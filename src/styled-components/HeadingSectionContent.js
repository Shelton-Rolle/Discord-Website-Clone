import styled from 'styled-components';

export const HeadingSectionContent = styled.div`
    display: grid;
    grid-template-columns: repeat(
        ${(props) => props.theme.numGridColumns},
        1fr
    );
    gap: 0 20px;
    margin: 0 auto;
    max-width: ${(props) => props.theme.maxContainerWidth};
    padding: ${(props) => props.theme.sectionSpacing} 40px;

    #hero {
        grid-column: 3 / span 8;

        #hero-text {
            margin-bottom: 8px;
            color: white;
            text-align: center;

            h1 {
                font-size: 56px;
                font-family: ${(props) => props.theme.luckiestGuyFont};
            }

            p {
                font-family: ${(props) => props.theme.oxygenFont};
                margin-top: 40px;
                font-size: clamp(16px, 2vw, 20px);
                line-height: 1.625;
            }
        }

        #hero-actions {
            display: flex;
            justify-content: center;
            gap: 24px;
            margin-top: 24px;
            font-family: ${(props) => props.theme.oxygenFont};

            a,
            button {
                border-radius: 28px;
                font-size: 20px;
                padding: 16px 32px;
            }
            a {
                background-color: white;
            }

            button {
                background-color: ${(props) => props.theme.notQuiteBlack};
                color: white;
                border: 0;
                transition-property: ${(props) =>
                    props.theme.bgHoverTransitionProperty};
                transition-duration: ${(props) =>
                    props.theme.bgHoverTransitionDuration};
                transition-timing-function: ${(props) =>
                    props.theme.bgHoverTransitionTimingFunction};
                cursor: pointer;

                &:hover {
                    background-color: hsl(
                        220,
                        calc(var(--saturation-factor, 1) * 7.7%),
                        22.9%
                    );
                    box-shadow: ${(props) => props.theme.bgHoverBoxShadow};
                }
            }
        }
    }
`;
