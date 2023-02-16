import styled from 'styled-components';

export const PageHeader = styled.div`
    /* width: 100%; */
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: ${(props) => props.theme.oxygenFont};

    a {
    }

    ul {
        display: flex;
        list-style: none;
        font-weight: 700;
    }

    li {
        margin: 10px;
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
    }
`;
