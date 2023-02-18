import { ReactComponent as Twitter } from '../images/social_media/twitter.svg';
import { ReactComponent as Instagram } from '../images/social_media/instagram.svg';
import { ReactComponent as Facebook } from '../images/social_media/facebook.svg';
import { ReactComponent as YouTube } from '../images/social_media/youtube.svg';
import { SocialMediaContainer as Container } from '../styled-components/SocialMediaContainer.js';

export const SocialMedia = () => {
    return (
        <Container>
            <a href="/">
                <Twitter />
            </a>
            <a href="/">
                <Instagram />
            </a>
            <a href="/">
                <Facebook />
            </a>
            <a href="/">
                <YouTube />
            </a>
        </Container>
    );
};
