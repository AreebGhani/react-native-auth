import { StatusBar } from 'expo-status-bar'
import { NavigationContainer, DarkTheme, DefaultTheme, } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Settings from '../screens/Settings'
import { useTheme } from '../context/ThemeContext'
import Login from '../screens/Login'
import Register from '../screens/Register'

const Drawer = createDrawerNavigator();

const Navigation = () => {
    const { theme } = useTheme();

    return (
        <>
            <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
            <NavigationContainer
                theme={theme === 'dark' ? DarkTheme : DefaultTheme}
            >
                <Drawer.Navigator
                    screenOptions={{
                        drawerType: "front",
                        headerTintColor: theme === 'light' ? '#000000' : '#FFFFFF',
                    }}
                >
                    <Drawer.Screen name="Home" component={Home} />
                    <Drawer.Screen name="Login" component={Login} />
                    <Drawer.Screen name="Register" component={Register} />
                    <Drawer.Screen name="Settings" component={Settings} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Navigation
