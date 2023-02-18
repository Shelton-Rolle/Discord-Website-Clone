import { ThemeProvider } from 'styled-components';
import HeadingSection from './sections/HeadingSection';
import { ContentSections } from './sections/ContentSections';
import { defaultPageTheme } from './styled-components/themes/defaultPageTheme';
import Footer from './sections/Footer';

function App() {
    return (
        <ThemeProvider theme={defaultPageTheme}>
            <div>
                <HeadingSection />
                <ContentSections />
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
