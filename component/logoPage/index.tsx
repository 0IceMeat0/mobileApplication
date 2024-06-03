import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {
  GamePage: undefined;
};

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'GamePage'
>;


const LogoPage: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  useEffect(() => {
    setTimeout( () => navigation.navigate('GamePage'), 2300)
    }, [])
  return (
    <View style={styles.wrap}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 1)', 'rgba(35, 35, 35, 1)', 'rgba(155, 40, 22, 1.5)', 'rgba(35, 35, 35, 1)', 'rgba(0, 0, 0, 1)']}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.background}
      >
        <Image style={styles.logo} source={require('../../assets/images/logoName.png')} alt='' />
        <Text style={styles.text}>Рассказываем о конференциях и других мероприятиях, а также делаем интервью с главными представителями криптосообщества.</Text>
        <Image style={styles.loader} source={require('../../assets/images/loaderWhite1.gif')} alt='' />
        <View style={styles.container}>
        
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    color: 'black',
    fontSize: 44,
    marginBottom: 20,
  },
  text:{
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 22,
    fontWeight: 700,
    color: 'black',
    textAlign: 'center'
  },
 
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  loader: {

  }
});

export default LogoPage;
