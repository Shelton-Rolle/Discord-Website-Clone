import { ContentSectionsContainer as Section } from '../styled-components/ContentSections';
import { ContentSection } from '../components/ContentSection';

import { ReactComponent as StudyGroup } from '../images/study-group.svg';
import { ReactComponent as JustChillin } from '../images/just-chillin.svg';
import { ReactComponent as Coach } from '../images/coach.svg';
import { ReactComponent as VideoCall } from '../images/video-call.svg';
import { ReactComponent as Stars } from '../images/stars.svg';

export const ContentSections = () => {
    return (
        <Section>
            <ContentSection
                sectionImage={<StudyGroup />}
                contentFlow="horizontal"
                typographicAlignment="normal"
                sectionContent={
                    <div className="sectionContent">
                        <h2>Create an invite-only place where you belong</h2>
                        <p>
                            Discord servers are organized into topic-based
                            channels where you can collaborate, share, and just
                            talk about your day without clogging up a group
                            chat.
                        </p>
                    </div>
                }
            />
            <ContentSection
                sectionImage={<JustChillin />}
                backgroundColor="#f6f6f6"
                contentFlow="horizontal"
                typographicAlignment="reverse"
                sectionContent={
                    <div className="sectionContent">
                        <h2>Where hanging out is easy</h2>
                        <p>
                            Grab a seat in a voice channel when you’re free.
                            Friends in your server can see you’re around and
                            instantly pop in to talk without having to call.
                        </p>
                    </div>
                }
            />
            <ContentSection
                sectionImage={<Coach />}
                contentFlow="horizontal"
                typographicAlignment="normal"
                sectionContent={
                    <div className="sectionContent">
                        <h2>From few to a fandom</h2>
                        <p>
                            Get any community running with moderation tools and
                            custom member access. Give members special powers,
                            set up private channels, and more.
                        </p>
                    </div>
                }
            />
            <ContentSection
                sectionImage={<VideoCall />}
                backgroundColor="#f6f6f6"
                contentFlow="vertical"
                typographicAlignment="normal"
                sectionContent={
                    <div className="sectionContent">
                        <h2>Test</h2>
                        <p>Test content</p>
                    </div>
                }
            />
            <ContentSection
                sectionImage={<Stars />}
                backgroundColor="#f6f6f6"
                contentFlow="vertical"
                typographicAlignment="reverse"
                sectionContent={
                    <div className="sectionContent">
                        <h2>Test</h2>
                        <p>Test content</p>
                    </div>
                }
            />
        </Section>
    );
};
