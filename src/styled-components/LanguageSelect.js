import styled from 'styled-components';

export const LanguageSelect = styled.div`
    margin-top: 24px;
    position: relative;
    font-family: ${(props) => props.theme.oxygenFont};

    #language-menu {
        position: absolute;
        bottom: 0;
        left: 0;
        background: white;
        transform: translateY(-30px);
        min-width: 150px;
        max-height: 320px;
        overflow-y: auto;
        overscroll-behavior: contain;
        border-radius: 8px;

        .dropdown-item {
            padding: 8px;
            display: flex;
            align-items: center;
            gap: 4px;
            color: ${(props) => props.theme.notQuiteBlack};
            background: transparent;
            border: 0;
            cursor: pointer;
            width: 100%;

            img {
                width: 24px;
                height: 16px;
            }

            &:hover {
                background-color: rgba(79, 84, 92, 0.16);
                border-radius: 4px;
            }
        }
    }

    #displayed-language {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 14px;
        border: none;
        background: transparent;
        color: white;
        cursor: pointer;

        img {
            width: 24px;
            height: 16px;
        }

        #label {
            display: flex;
            align-items: center;
            gap: 4px;
        }
    }
`;
