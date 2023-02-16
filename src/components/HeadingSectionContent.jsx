import React from 'react';
import { HeadingButtonLink } from '../styled-components/HeadingButtonLink';
import { HeadingSectionContent as Container } from '../styled-components/HeadingSectionContent';
import { BsDownload } from 'react-icons/bs';

export const HeadingSectionContent = () => {
    return (
        <Container>
            <div id="hero">
                <div id="hero-text">
                    <h1>Imagine a place...</h1>
                    <p>
                        ...where you can belong to a school club, a gaming
                        group, or a worldwide art community. Where just you and
                        a handful of friends can spend time together. A place
                        that makes it easy to talk every day and hang out more
                        often.
                    </p>
                </div>
                <div id="hero-actions">
                    <HeadingButtonLink
                        href="/"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <BsDownload /> Download for Mac
                    </HeadingButtonLink>
                    <button>Open Discord in your browser</button>
                </div>
            </div>
        </Container>
    );
};
