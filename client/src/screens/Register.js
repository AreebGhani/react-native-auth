import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../context/ThemeContext';
import themeStyles from '../styles/theme';
import axios from "axios";
import { server } from '../constants';

const Register = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { bgColor, textColor, button } = themeStyles();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ success: "", error: "" });

  const handleRegister = async () => {
    if (username === '' || email === '' || password === '') {
      setMessage({ success: '', error: 'All fields are required' });
      setTimeout(() => setMessage({ success: '', error: '' }), 3000);
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${server}/register`, { username, email, password });
      if (res.data.success) {
        setUsername('');
        setEmail('');
        setPassword('');
        setMessage({ success: res.data.message, error: '' });
        setTimeout(() => navigation.navigate('Login'), 2000);
      } else {
        setMessage({ success: '', error: res.data.message });
      }
    } catch (error) {
      setMessage({ success: '', error: 'An error occurred while registering' });
    }
    setLoading(false);
    setTimeout(() => setMessage({ success: '', error: '' }), 3000);
  };

  return (
    <View style={[styles.container, bgColor]}>
      <Text style={[styles.title, textColor]}>Register</Text>
      <TextInput
        style={[styles.input, textColor]}
        placeholderTextColor={theme === 'light' ? 'black' : 'white'}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, textColor]}
        placeholderTextColor={theme === 'light' ? 'black' : 'white'}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[styles.input, textColor]}
        placeholderTextColor={theme === 'light' ? 'black' : 'white'}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      {message.success !== '' && <Text style={styles.successMessage}>{message.success}</Text>}
      {message.error !== '' && <Text style={styles.errorMessage}>{message.error}</Text>}
      <TouchableOpacity style={[styles.button, button.bgColor]} onPress={handleRegister} disabled={loading}>
        {
          loading ? <ActivityIndicator size="large" color={theme === 'light' ? 'white' : 'black'} />
            : <Text style={[styles.buttonText, button.textColor]}>Register</Text>
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successMessage: {
    color: 'green',
    marginBottom: 20,
  },
  errorMessage: {
    color: 'red',
    marginBottom: 20,
  },
});

export default Register;
