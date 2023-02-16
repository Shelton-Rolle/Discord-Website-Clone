import { PageHeader } from '../components/PageHeader';
import { HeadingContentContainer } from '../styled-components/HeadingContentContainer';
import { HeadingSectionContent } from '../components/HeadingSectionContent';
import { HeadingSection as Section } from '../styled-components/HeadingSection';
import { HeadingImageContainer } from '../components/HeadingImageContainer';

export default function HeadingSection() {
    return (
        <Section>
            <HeadingContentContainer>
                <PageHeader />
                <HeadingSectionContent />
                <HeadingImageContainer />
            </HeadingContentContainer>
        </Section>
    );
}
