import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MainPage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default MainPage;
