import styled from 'styled-components';

export const ContentSectionsContainer = styled.section`
    #call-to-action {
        font-family: ${(props) => props.theme.oxygenFont};

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
