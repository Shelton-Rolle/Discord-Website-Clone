import styled from 'styled-components';

export const HeadingImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;

    svg {
        position: absolute;
        left: 50%;
        bottom: 0;
    }

    #camping-svg,
    #bar-svg {
        z-index: 1;
    }

    #camping-svg {
        height: auto;
        width: auto;
        margin-left: -1030px;
    }

    #bar-svg {
        margin-left: 370px;
    }

    #mountains-svg {
        margin-left: -1280px;
        top: auto;
    }
`;
