import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { LanguageSelect } from '../styled-components/LanguageSelect';

export const LanguageDropdown = ({ languages }) => {
    const [showLanguages, setShowLanguages] = useState(false);
    const DropdownItem = ({ label, flag }) => {
        return (
            <button className="dropdown-item">
                <img src={flag} alt="flag" /> {label}
            </button>
        );
    };

    return (
        <LanguageSelect>
            {showLanguages && (
                <div id="language-menu">
                    {languages.map((language) => {
                        const { label, flag } = language;

                        return <DropdownItem label={label} flag={flag} />;
                    })}
                </div>
            )}
            <button
                id="displayed-language"
                onClick={() => setShowLanguages(!showLanguages)}
            >
                <img src={languages[0].flag} alt="flag" />
                <div id="label">
                    <p>{languages[0].label}</p>
                    <IoIosArrowDown />
                </div>
            </button>
        </LanguageSelect>
    );
};
