import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Dimensions, SafeAreaView, StatusBar, Platform, useColorScheme } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Badge } from 'react-native-elements';

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const cardMargin = 10;
const cardSize = (screenWidth - (cardMargin * 2 * numColumns) - 40) / numColumns;
// -40 es el padding horizontal del container (20+20)

const categories = [
  { key: '1', label: 'cursos', icon: require('./assets/images/cursos.png') },
  { key: '2', label: 'notas', icon: require('./assets/images/notas.png') },
  { key: '3', label: 'promedio', icon: require('./assets/images/logo.png') },
  { key: '4', label: 'calendario', icon: require('./assets/images/calendario.png') },
  { key: '5', label: 'horario', icon: require('./assets/images/horario.png') },
  { key: '6', label: 'ver todo', icon: require('./assets/images/logo.png') },
];

const lightTheme = {
  background: '#fff',
  text: '#181515',
  header: '#fff',
  searchBg: '#eee',
  cardBg: '#f8f8f8',
  highlight: '#4EFF6A',
  icon: '#222',
  searchPlaceholder: '#888',
};

const darkTheme = {
  background: '#181515',
  text: '#fff',
  header: '#181515',
  searchBg: '#333',
  cardBg: '#222',
  highlight: '#4EFF6A',
  icon: '#fff',
  searchPlaceholder: '#aaa',
};

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }] }>
      <View style={[styles.container, { backgroundColor: theme.background, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20 }] }>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.menuButton}>
            <MaterialIcons name="menu" size={40} color={theme.icon} />
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <Image source={require('./assets/images/logo.png')} style={styles.profilePic} />
            <View>
              <Text style={[styles.hola, { color: theme.text }]}>Hola!</Text>
              <Text style={[styles.name, { color: theme.highlight } ]}>MORGAN MAXWELL</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bellButton}>
            <View style={{ position: 'relative' }}>
              <MaterialIcons name="notifications" size={40} color={theme.icon} />
              <Badge
                status="error"
                containerStyle={{ position: 'absolute', top: -2, right: -2 }}
                badgeStyle={{ width: 12, height: 12, borderRadius: 6 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={[styles.searchContainer, { backgroundColor: theme.searchBg }] }>
          <TextInput
            style={[styles.searchInput, { color: theme.text }]}
            placeholder="Search workout, program, trainers, etc"
            placeholderTextColor={theme.searchPlaceholder}
          />
          <MaterialIcons name="search" size={24} color={theme.searchPlaceholder} style={styles.searchIcon} />
        </View>

        {/* Categorías */}
        <View style={styles.categoriesHeader}>
          <Text style={[styles.categorias, { color: theme.text }]}>Categorias</Text>
          <Text style={[styles.showAll, { color: theme.text }]}>Show All</Text>
        </View>

        {/* Grid */}
        <FlatList
          data={categories}
          numColumns={numColumns}
          renderItem={({ item }) => (
            <View style={[styles.categoryBox, { backgroundColor: theme.cardBg }] }>
              <Image source={item.icon} style={styles.categoryIcon} />
              <Text style={[styles.categoryLabel, { color: theme.text }]}>{item.label}</Text>
            </View>
          )}
          keyExtractor={item => item.key}
          contentContainerStyle={styles.grid}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  menuButton: { marginRight: 10 },
  menuIcon: { width: 40, height: 40 },
  profileContainer: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  profilePic: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  hola: { fontSize: 16 },
  name: { fontSize: 18, fontWeight: 'bold' },
  bellButton: { marginLeft: 10 },
  bellIcon: { width: 40, height: 40 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', borderRadius: 15, paddingHorizontal: 15, marginBottom: 30 },
  searchInput: { flex: 1, height: 50 },
  searchIcon: { marginLeft: 10 },
  categoriesHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  categorias: { fontSize: 28, fontWeight: 'bold' },
  showAll: { fontSize: 24, fontWeight: 'bold' },
  grid: { alignItems: 'center' },
  categoryBox: {
    borderRadius: 20,
    width: cardSize,
    height: cardSize,
    justifyContent: 'center',
    alignItems: 'center',
    margin: cardMargin,
  },
  categoryIcon: { width: cardSize * 0.45, height: cardSize * 0.45, marginBottom: 10 },
  categoryLabel: { fontSize: 16, fontWeight: '500', textAlign: 'center' },
}); 