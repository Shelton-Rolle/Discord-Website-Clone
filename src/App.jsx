import { ThemeProvider } from 'styled-components';
import HeadingSection from './sections/HeadingSection';
import { ContentSections } from './sections/ContentSections';
import { defaultPageTheme } from './styled-components/themes/defaultPageTheme';

function App() {
    return (
        <ThemeProvider theme={defaultPageTheme}>
            <div>
                <HeadingSection />
                <ContentSections />
            </div>
        </ThemeProvider>
    );
}

export default App;
