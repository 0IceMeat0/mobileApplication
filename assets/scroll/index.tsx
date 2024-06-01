import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

type Props = {
  children: JSX.Element | JSX.Element[] 
}

const ScrollableScreen = ({ children }: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  
  },
});

export default ScrollableScreen;
