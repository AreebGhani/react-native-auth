import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import themeStyles from '../styles/theme';

const ChangeThemeButton = () => {
    const { theme, changeTheme } = useTheme();
    const { bgColor, textColor } = themeStyles();

    return (
        <View style={[styles.container, bgColor]}>
            <View style={styles.button}>
                <Text style={[styles.btnText, textColor]}>{theme} Theme</Text>
                <Switch
                    value={theme === 'dark'}
                    onValueChange={changeTheme}
                    thumbColor={textColor.color}
                    trackColor={{ false: '#ccc', true: '#555' }}
                />
            </View>
        </View>
    );
};

export default ChangeThemeButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnText: {
        textTransform: 'capitalize',
        marginRight: 10,
    }
});
