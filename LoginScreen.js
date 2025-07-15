import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.welcomeText}>
        Welcome to <Text style={styles.brand}>Fauget!</Text>
      </Text>
      <Text style={styles.subtitle}>The Most Popular Social Media App.</Text>
      <View style={styles.inputContainer}>
        <TextInput
          mode="outlined"
          label="E-mail / Username"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          left={<TextInput.Icon name={() => <Icon name="account" size={22} color="#888" />} />}
          theme={{ colors: { text: '#fff', primary: '#6ee06e', background: '#232323', placeholder: '#888' } }}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry={!showPassword}
          left={<TextInput.Icon name={() => <Icon name="lock" size={22} color="#888" />} />}
          right={<TextInput.Icon name={() => (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Icon name={showPassword ? 'eye-off' : 'eye'} size={22} color="#888" />
            </TouchableOpacity>
          )} />}
          theme={{ colors: { text: '#fff', primary: '#6ee06e', background: '#232323', placeholder: '#888' } }}
        />
      </View>
      <View style={styles.row}>
        <View style={styles.rememberMe}>
          <Checkbox.Android
            status={remember ? 'checked' : 'unchecked'}
            onPress={() => setRemember(!remember)}
            color="#6ee06e"
            uncheckedColor="#888"
          />
          <Text style={styles.rememberText}>Remember me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient colors={['#00c6fb', '#6ee06e']} style={styles.gradientBtn}>
        <Button mode="contained" onPress={() => {}} style={styles.signInBtn} labelStyle={styles.signInLabel} color="transparent">
          SIGN IN
        </Button>
      </LinearGradient>
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR SIGN IN WITH</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialBtn}>
          <Icon name="phone" size={28} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Icon name="email" size={28} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Icon name="at" size={28} color="#888" />
        </TouchableOpacity>
      </View>
      <View style={styles.signupRow}>
        <Text style={styles.noAccount}>DIDN'T HAVE AN ACCOUNT? </Text>
        <TouchableOpacity>
          <Text style={styles.signup}>SIGN UP NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '400',
    textAlign: 'center',
  },
  brand: {
    color: '#6ee06e',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 16,
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#232323',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    color: '#888',
    fontSize: 15,
  },
  forgot: {
    color: '#888',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
  gradientBtn: {
    width: '100%',
    borderRadius: 12,
    marginBottom: 32,
  },
  signInBtn: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    elevation: 0,
  },
  signInLabel: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#333',
    marginHorizontal: 8,
  },
  orText: {
    color: '#888',
    fontSize: 13,
    letterSpacing: 1,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  socialBtn: {
    backgroundColor: '#232323',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 8,
  },
  signupRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noAccount: {
    color: '#888',
    fontSize: 15,
  },
  signup: {
    color: '#6ee06e',
    fontSize: 15,
    fontWeight: 'bold',
  },
}); 