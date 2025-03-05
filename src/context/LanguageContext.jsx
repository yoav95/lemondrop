import { createContext, useContext, useState } from "react";

// Create the context
const LanguageContext = createContext();

// Provider component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("he");

    // Function to toggle language
    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "he" : "en")); // Example: English <-> Spanish
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook for easier use
export const useLanguage = () => useContext(LanguageContext);
