import { ThemeProvider } from 'styled-components';
import HeadingSection from './sections/HeadingSection';
import { defaultPageTheme } from './styled-components/themes/defaultPageTheme';

function App() {
    return (
        <ThemeProvider theme={defaultPageTheme}>
            <div>
                <HeadingSection />
            </div>
        </ThemeProvider>
    );
}

export default App;
