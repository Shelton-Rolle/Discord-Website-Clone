import { FooterSection as Section } from '../styled-components/FooterSection';
const unitedStatesFlag = require('../images/flags/poland.png');

const languages = [
    {
        label: 'English',
        value: 'en',
        flag: unitedStatesFlag,
    },
];

export default function Footer() {
    // Add a state variable to hold the current language selection
    return (
        <Section>
            <div>
                <h3>Imagine A Place</h3>
                {/* 
                    Create a custom dropdown component to have more control
                    over styling and functionality
                */}
                <select>
                    {languages.map((language) => {
                        const { label, value, flag } = language;
                        return (
                            <option value={value}>
                                <img src={flag} alt="us-flag" />
                                {label}
                            </option>
                        );
                    })}
                </select>
            </div>
        </Section>
    );
}
