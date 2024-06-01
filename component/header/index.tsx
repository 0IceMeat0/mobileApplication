// CustomHeader.js
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {
  MainPage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'MainPage'
>;
const Header = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View style={styles.headerContainer}>
 
        <TouchableOpacity style={styles.logo}
        onPress={
          () => navigation.navigate('MainPage')
        }
        >
        <Image source={require('../../assets/images/justLogo.png')} alt='' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.stripse}>
        <Image source={require('../../assets/images/stripse.png')} alt='' />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 80,
    backgroundColor: '#1B2228', // You can change the background color as per your requirement
  },
  headerText: {
    color: 'red',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    position: 'absolute',
    left: 15,
    bottom: '30%',
  },
  stripse: {
    position: 'absolute',
    right: 15,
    bottom: '35%',
  }
});

export default Header;
