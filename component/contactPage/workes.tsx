import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { obj } from './obj';

const Workers = () => {

  const elements = obj.map((el) => {
    return (
      <View key={el.name} style={styles.profile}>
        <Image style={styles.imgProfile} source={el.img} alt='' />
        <Text style={styles.textProfile}>{el.name}</Text>
        <Text style={styles.textProfile}>{el.descrition}</Text>
        <View style={styles.border}></View>
      </View>
    );
  });

  return (
    <View style={styles.blockProfile}>
      {elements}
    </View>
  );
};

const styles = StyleSheet.create({
  
  blockProfile: {
    flex: 1,
    width: 300,
    alignItems: 'center',
    padding: 20,
  },
  profile: {
    padding: 20,
    alignItems: 'center',
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textProfile: {
    textAlign: 'center',
    marginVertical: 5,
  },
  border: {
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1, 
    width: 280,
    marginVertical: 10,
  },
});

export default Workers;
