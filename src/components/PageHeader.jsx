import { PageHeader as Container } from '../styled-components/PageHeader';
import { ReactComponent as DiscordLogo } from '../images/logo.svg';

export const PageHeader = () => {
    return (
        <Container>
            <a href="/">
                <DiscordLogo />
            </a>
            <ul>
                <li>
                    <a href="/">Download</a>
                </li>
                <li>
                    <a href="/">Nitro</a>
                </li>
                <li>
                    <a href="/">Discover</a>
                </li>
                <li>
                    <a href="/">Safety</a>
                </li>
                <li>
                    <a href="/">Support</a>
                </li>
                <li>
                    <a href="/">Blog</a>
                </li>
                <li>
                    <a href="/">Careers</a>
                </li>
            </ul>
            <div>
                <a href="/">Login</a>
            </div>
        </Container>
    );
};
