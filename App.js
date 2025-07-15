import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, useColorScheme } from 'react-native';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const colorScheme = useColorScheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 segundos
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen colorScheme={colorScheme} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <HomeScreen />
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
