import { useState, useContext, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        retrieveTheme();
    }, []);

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        storeTheme(newTheme);
    };

    const storeTheme = async (value) => {
        try {
            await AsyncStorage.setItem('theme', value);
        } catch (error) {
            console.error("Error storing theme:", error);
        }
    };

    const retrieveTheme = async () => {
        try {
            const storedTheme = await AsyncStorage.getItem('theme');
            if (storedTheme !== null) {
                setTheme(storedTheme);
            }
        } catch (error) {
            console.error("Error retrieving theme:", error);
        }
    };

    const values = {
        theme,
        changeTheme
    };

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    );
};