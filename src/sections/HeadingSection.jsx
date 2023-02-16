import { PageHeader } from '../components/PageHeader';
import { ContentContainer } from '../styled-components/ContentContainer';
import { HeadingSectionContent } from '../components/HeadingSectionContent';
import { HeadingSection as Section } from '../styled-components/HeadingSection';
import { HeadingImageContainer } from '../components/HeadingImageContainer';

export default function HeadingSection() {
    return (
        <Section>
            <ContentContainer>
                <PageHeader />
                <HeadingSectionContent />
                <HeadingImageContainer />
            </ContentContainer>
        </Section>
    );
}
