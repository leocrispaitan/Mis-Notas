import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ colorScheme }) => {
  const isDark = colorScheme === 'dark';
  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#111' : '#fff' }] }>
      <Image source={require('./assets/images/logo.png')} style={styles.logo} />
      <Text style={[styles.text, { color: isDark ? '#fff' : '#333' }]}>Hola bienvenido bot</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default SplashScreen; 