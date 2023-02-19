import { NormalHorizontalSection } from '../styled-components/NormalHorizontalSection';
import { ReverseHorizontalSection } from '../styled-components/ReverseHorizontalSection';
import { ThemeProvider } from 'styled-components';
import { defaultPageTheme } from '../styled-components/themes/defaultPageTheme';
import { SectionContentContainer } from '../styled-components/SectionContentContainer';
export const ContentSection = ({
    sectionImage,
    backgroundColor,
    typographicAlignment,
    sectionContent,
}) => {
    const theme = {
        ...defaultPageTheme,
        backgroundColor: !backgroundColor ? '#fff' : backgroundColor,
    };

    const Normal = () => {
        return (
            <NormalHorizontalSection>
                <SectionContentContainer>
                    {sectionImage}
                    {sectionContent}
                </SectionContentContainer>
            </NormalHorizontalSection>
        );
    };

    const Reverse = () => {
        return (
            <ReverseHorizontalSection>
                <SectionContentContainer>
                    {sectionContent}
                    {sectionImage}
                </SectionContentContainer>
            </ReverseHorizontalSection>
        );
    };

    return (
        <ThemeProvider theme={theme}>
            {typographicAlignment === 'normal' ? (
                <Normal />
            ) : typographicAlignment === 'reverse' ? (
                <Reverse />
            ) : (
                <></>
            )}
        </ThemeProvider>
    );
};
