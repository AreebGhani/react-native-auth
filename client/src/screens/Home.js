import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import themeStyles from '../styles/theme';

const Home = () => {
    const { bgColor, textColor } = themeStyles();
    const navigation = useNavigation();

    const goToSettings = () => {
        navigation.navigate('Settings');
    };

    return (
        <View style={[styles.container, bgColor]}>
            <Text style={textColor}>Home Screen</Text>
            <TouchableOpacity onPress={goToSettings} style={[styles.button, bgColor]}>
                <Text style={textColor}>Go to Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 100,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
    },
});
