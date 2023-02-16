import styled from 'styled-components';

export const PageHeader = styled.div`
    /* width: 100%; */
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${(props) => props.theme.oxygenFont};

    ul {
        padding: 0;
        display: flex;
        list-style: none;
        font-weight: 700;
    }

    li {
        margin: 6px 10px;
        padding: 10px;

        a {
            font-size: 15px;
            color: white;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    div {
        width: 124px;
        text-align: end;
        display: flex;
        flex-flow: row-reverse;

        a {
            font-size: 14px;
            border-radius: 40px;
            padding: 8px 16px;
            cursor: pointer;
            background: white;
            text-decoration: none;
            color: ${(props) => props.theme.notQuiteBlack};
            transition-property: background-color, color, box-shadow,
                -webkit-box-shadow;
            transition-duration: 0.2s;
            transition-timing-function: ease-in-out;

            &:hover {
                color: ${(props) => props.theme.brandBlue};
                box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
            }
        }
    }
`;
