import { PageHeader } from '../components/PageHeader';
import { HeadingContentContainer } from '../styled-components/HeadingContentContainer';
import { HeadingSection as Section } from '../styled-components/HeadingSection';

export default function HeadingSection() {
    return (
        <Section>
            <HeadingContentContainer>
                <PageHeader />
            </HeadingContentContainer>
        </Section>
    );
}
