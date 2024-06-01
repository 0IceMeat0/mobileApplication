import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const LogoPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrap}>
      <LinearGradient
        colors={['rgba(205, 40, 22, 1)', 'rgba(10, 44, 52, 2)']}
        start={{ x: 3, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <Image style={styles.logo} source={require('../../assets/images/logo.svg')} alt='' />
        <Text style={styles.text}>Рассказываем о конференциях и других мероприятиях, а также делаем интервью с главными представителями криптосообщества.</Text>
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('GamePage')}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
          
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
    marginBottom: 140,
  },
  button: {
    width: '90%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 18,
    marginBottom: 45,
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
  }
});

export default LogoPage;