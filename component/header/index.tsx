// CustomHeader.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>My Custom Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    backgroundColor: '#6200ee', // You can change the background color as per your requirement
  },
  headerText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
