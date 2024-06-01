import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ContactPage = () => {
  return (
    <View style={styles.wrap}>
      <View style={styles.blockInfo}>
        <Text style={styles.textInfo}>AltCoinLog — это команда специалистов, выступающих за развитие цифровых валют (криптовалют) и их распространение в русскоговорящих странах и по всему миру. Мы отслеживаем актуальные новости, освещаем события биткоин-индустрии.
Рассказываем о конференциях и других мероприятиях, а также делаем интервью с главными представителями криптосообщества.</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blockInfo: {
    

  },
  textInfo: {
    fontSize: 18,
  },
});

export default ContactPage;
