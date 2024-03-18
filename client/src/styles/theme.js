import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const themeStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    bgColor: {
      backgroundColor: theme === 'light' ? '#FFFFFF' : '#1E1E1E',
    },
    textColor: {
      color: theme === 'light' ? '#1E1E1E' : '#FFFFFF',
    },
    button: {
      textColor: {
        color: theme === 'light' ? '#FFFFFF' : '#000000',
      },
      bgColor: {
        backgroundColor: theme === 'light' ? '#0000FF' : '#ADD8E6',
      }
    }
  });
};

export default themeStyles;
