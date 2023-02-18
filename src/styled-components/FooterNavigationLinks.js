import styled from 'styled-components';

export const FooterNavigationLinks = styled.div`
    grid-column: 5 / span 8;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;

    .nav-column {
        height: 100%;
        font-family: ${(props) => props.theme.oxygenFont};
        margin-bottom: 40px;

        &-title,
        &-list {
            font-weight: 300;
        }

        &-title {
            color: ${(props) => props.theme.brandBlue};
        }

        &-list {
            list-style: none;

            &-item {
                margin-top: 8px;

                a {
                    color: white;
                    text-decoration: none;
                    font-size: 16px;
                }

                &:hover {
                    a {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;
