import React, { createContext, useContext, useState, useEffect } from 'react';
import data from '../locales/data.json';

const LocaleContext = createContext();

export const LocaleProvider = ({ children }) => {
    const [localeData, setLocaleData] = useState(null);

    useEffect(() => {
        // Simulate fetching or setting JSON data
        setLocaleData(data);
    }, []);

    return (
        <LocaleContext.Provider value={localeData}>
            {children}
        </LocaleContext.Provider>
    );
};

export const useLocale = () => {
    return useContext(LocaleContext);
};
