import { LanguageDropdown } from '../components/LanguageDropdown';
import { FooterSection as Section } from '../styled-components/FooterSection';
import { languages } from '../consts/flags';
import { LanguageAndMedia } from '../styled-components/LanguageAndMedia';
import { SocialMedia } from '../components/SocialMedia';
import { FooterNavigationLinks } from '../styled-components/FooterNavigationLinks';
import { ReactComponent as DiscordLogo } from '../images/logo.svg';
import { HeadingButtonLink } from '../styled-components/HeadingButtonLink';
import { ThemeProvider } from 'styled-components';
import { defaultPageTheme } from '../styled-components/themes/defaultPageTheme';

export default function Footer() {
    const theme = {
        ...defaultPageTheme,
        notQuiteBlack: 'white',
        brandBlue: 'white',
        backgroundColor: defaultPageTheme.brandBlue,
    };

    return (
        <Section>
            <div id="container">
                <LanguageAndMedia>
                    <h3>Imagine A Place</h3>
                    <LanguageDropdown languages={languages} />
                    <SocialMedia />
                </LanguageAndMedia>
                <FooterNavigationLinks>
                    <div className="nav-column">
                        <h4 className="nav-column-title">Product</h4>
                        <ul className="nav-column-list">
                            <li className="nav-column-list-item">
                                <a href="/">Download</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Nitro</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Status</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <h4 className="nav-column-title">Company</h4>
                        <ul className="nav-column-list">
                            <li className="nav-column-list-item">
                                <a href="/">About</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Jobs</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Branding</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Newsroom</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <h4 className="nav-column-title">Resources</h4>
                        <ul className="nav-column-list">
                            <li className="nav-column-list-item">
                                <a href="/">College</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Support</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Safety</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Blog</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Feedback</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Developers</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">StreamKit</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Creators</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Community</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-column">
                        <h4 className="nav-column-title">Policies</h4>
                        <ul className="nav-column-list">
                            <li className="nav-column-list-item">
                                <a href="/">Terms</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Privacy</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Cookie Settings</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Guidelines</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Acknoledgements</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Licenses</a>
                            </li>
                            <li className="nav-column-list-item">
                                <a href="/">Moderation</a>
                            </li>
                        </ul>
                    </div>
                </FooterNavigationLinks>
                <div id="signup-cta">
                    <a href="/">
                        <DiscordLogo />
                    </a>
                    <div>
                        <ThemeProvider theme={theme}>
                            <HeadingButtonLink href="/">
                                Sign Up
                            </HeadingButtonLink>
                        </ThemeProvider>
                    </div>
                </div>
            </div>
        </Section>
    );
}
