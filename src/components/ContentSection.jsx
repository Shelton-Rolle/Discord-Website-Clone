import { NormalVerticalSection } from '../styled-components/NormalVerticalSection';
import { NormalHorizontalSection } from '../styled-components/NormalHorizontalSection';
import { ReverseVerticalSection } from '../styled-components/ReverseVerticalSection';
import { ReverseHorizontalSection } from '../styled-components/ReverseHorizontalSection';
import { ThemeProvider } from 'styled-components';
import { defaultPageTheme } from '../styled-components/themes/defaultPageTheme';
import { SectionContentContainer } from '../styled-components/SectionContentContainer';
export const ContentSection = ({
    sectionImage,
    backgroundColor,
    contentFlow,
    typographicAlignment,
    sectionContent,
}) => {
    const theme = {
        ...defaultPageTheme,
        backgroundColor: !backgroundColor ? '#fff' : backgroundColor,
    };

    // Content Flow Possible Values - vertical || horizontal
    // Typographic Alignment Possible Values - normal || reverse

    const VerticalSection = () => {
        const Normal = () => {
            return (
                <NormalVerticalSection>
                    <SectionContentContainer>
                        {sectionImage}
                        {sectionContent}
                    </SectionContentContainer>
                </NormalVerticalSection>
            );
        };
        const Reverse = () => {
            return (
                <ReverseVerticalSection>
                    <SectionContentContainer>
                        {sectionContent}
                        {sectionImage}
                    </SectionContentContainer>
                </ReverseVerticalSection>
            );
        };
        return (
            <>
                {typographicAlignment === 'normal' ? (
                    <Normal />
                ) : typographicAlignment === 'reverse' ? (
                    <Reverse />
                ) : (
                    <></>
                )}
            </>
        );
    };

    const HorizontalSection = () => {
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
            <>
                {typographicAlignment === 'normal' ? (
                    <Normal />
                ) : typographicAlignment === 'reverse' ? (
                    <Reverse />
                ) : (
                    <></>
                )}
            </>
        );
    };

    return (
        <ThemeProvider theme={theme}>
            {contentFlow === 'vertical' ? (
                <VerticalSection />
            ) : contentFlow === 'horizontal' ? (
                <HorizontalSection />
            ) : (
                <></>
            )}
        </ThemeProvider>
    );
};
