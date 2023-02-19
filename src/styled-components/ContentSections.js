import styled from 'styled-components';

export const ContentSectionsContainer = styled.section`
    #video-call {
        margin: 0 auto;
        padding-top: 120px;
        background-color: ${(props) => props.theme.offWhite};
        text-align: center;

        #container {
            display: grid;
            grid-template-columns: repeat(
                ${(props) => props.theme.numGridColumns},
                1fr
            );
            gap: 0 20px;

            #description {
                grid-column: 2 / span 10;
                color: ${(props) => props.theme.notQuiteBlack};

                h2 {
                    font-size: clamp(20px, 4vw, 40px);
                    font-family: ${(props) => props.theme.luckiestGuyFont};
                    text-transform: uppercase;
                    font-weight: 700;
                }

                p {
                    margin-top: 24px;
                    font-size: clamp(16px, 2vw, 20px);
                    line-height: 1.625;
                    font-family: ${(props) => props.theme.oxygenFont};
                }
            }

            svg {
                grid-column: span 12;
                width: 100%;
            }
        }
    }

    #call-to-action {
        background: ${(props) => props.theme.offWhite};
        font-family: ${(props) => props.theme.oxygenFont};
        padding-bottom: 120px;

        #cta-text {
            display: flex;
            justify-content: center;
        }

        #cta-text {
            position: relative;

            svg {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);
            }

            h2 {
                margin-top: 30px;
                font-weight: 700;
                font-size: 32px;
                line-height: 120%;
            }
        }

        #cta-link {
            display: flex;
            justify-content: center;
            gap: 24px;
            font-family: Oxygen, sans-serif;
            margin-top: 40px;

            a {
                display: flex;
                align-items: center;
                gap: 10px;
                margin: auto;
                border-radius: 28px;
                font-size: 20px;
                padding: 16px 32px;

                &:hover {
                    background-color: hsl(235, 86.1%, 71.8%);
                }
            }
        }
    }
`;
