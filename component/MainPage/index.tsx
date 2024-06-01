import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScrollableScreen from '@/assets/scroll';

const MainPage = () => {
  return (
    <ScrollableScreen>
    <View style={styles.container}>
      <Text style={styles.text}>MainPage</Text>
    </View>
    </ScrollableScreen>
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