import { ContentSectionsContainer as Section } from '../styled-components/ContentSections';
import { ContentSection } from '../components/ContentSection';
import { BsDownload } from 'react-icons/bs';
import { HeadingButtonLink } from '../styled-components/HeadingButtonLink';
import { ReactComponent as StudyGroup } from '../images/study-group.svg';
import { ReactComponent as JustChillin } from '../images/just-chillin.svg';
import { ReactComponent as Coach } from '../images/coach.svg';
import { ReactComponent as VideoCall } from '../images/video-call.svg';
import { ReactComponent as Stars } from '../images/stars.svg';
import { ThemeProvider } from 'styled-components';
import { defaultPageTheme } from '../styled-components/themes/defaultPageTheme';
import { ContentContainer } from '../styled-components/ContentContainer';

export const ContentSections = () => {
    const theme = {
        ...defaultPageTheme,
        notQuiteBlack: 'white',
        brandBlue: 'white',
        backgroundColor: defaultPageTheme.brandBlue,
    };
    return (
        <Section>
            <ContentSection
                sectionImage={<StudyGroup />}
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
            <div id="video-call">
                <ContentContainer id="container">
                    <div id="description">
                        <h2>Reliable Tech for Staying Close</h2>
                        <p>
                            Low-latency voice and video feels like you’re in the
                            same room. Wave hello over video, watch friends
                            stream their games, or gather up and have a drawing
                            session with screen share.
                        </p>
                    </div>
                    <VideoCall />
                </ContentContainer>
            </div>
            <div id="call-to-action">
                <ContentContainer>
                    <div id="cta-text">
                        <Stars />
                        <h2>Ready to start your journey?</h2>
                    </div>
                    <div id="cta-link">
                        <ThemeProvider theme={theme}>
                            <HeadingButtonLink href="/">
                                <BsDownload /> Download for Mac
                            </HeadingButtonLink>
                        </ThemeProvider>
                    </div>
                </ContentContainer>
            </div>
        </Section>
    );
};
