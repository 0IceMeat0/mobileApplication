import ScrollableScreen from '@/assets/scroll';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ContactPage = () => {
  return (
    <ScrollableScreen>
    <View style={styles.wrap}>
      <View style={styles.blockInfo}>
      <Text style={styles.title}>Наша Команда</Text> 
        <Text style={styles.textInfo}>AltCoinLog — это команда специалистов, выступающих за развитие цифровых валют (криптовалют) и их распространение в русскоговорящих странах и по всему миру. Мы отслеживаем актуальные новости, освещаем события биткоин-индустрии.
        Рассказываем о конференциях и других мероприятиях, а также делаем интервью с главными представителями криптосообщества.</Text>
        </View>
    </View>
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
  
  },
  blockInfo: {
    borderRadius: 12,
    borderWidth: 3, 
    borderColor: 'black',
    padding: 20,
    margin: 5,
    marginTop: 25,
  },
  textInfo: {
    fontSize: 18,
  },
  title: {
    fontSize: 27,
    marginBottom: 5,
  },
});

export default ContactPage;
