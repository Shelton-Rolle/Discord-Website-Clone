import { HeadingImageContainer as Container } from '../styled-components/HeadingImageContainer';
import { ReactComponent as Camping } from '../images/camping.svg';
import { ReactComponent as Bar } from '../images/bar.svg';
import { ReactComponent as Mountains } from '../images/mountains.svg';

export const HeadingImageContainer = () => {
    return (
        <Container>
            <Camping id="camping-svg" />
            <Bar id="bar-svg" />
            <Mountains id="mountains-svg" />
        </Container>
    );
};
