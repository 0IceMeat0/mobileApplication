import ScrollableScreen from '@/assets/scroll';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Workers from './workes';
import Slider from './Slide';
import Vacansies from './vacansies';



const ContactPage = () => {
  const rows = Array.from(Array(15).keys());
  const columns = Array.from(Array(5).keys());
  const dots =  rows.map((rowIndex) => (
    <View key={rowIndex} style={styles.row}>
      {columns.map((colIndex) => (
        <View key={colIndex} style={styles.dot}></View>
      ))}
    </View>
  ))

  return (
    <ScrollableScreen>
      <Text style={styles.mainTitle}>Наша Команда</Text> 
    <View style={styles.wrap}>
      <View style={styles.blockInfo}>
      <Text style={styles.title}>Чем мы занимаемся</Text> 
        <Text style={styles.textInfo}>AltCoinLog — это команда специалистов, выступающих за развитие цифровых валют (криптовалют) и их распространение в русскоговорящих странах и по всему миру. Мы отслеживаем актуальные новости, освещаем события биткоин-индустрии.
        Рассказываем о конференциях и других мероприятиях, а также делаем интервью с главными представителями криптосообщества.</Text>
        </View>
    <View style={styles.titlePersonal}><View style={styles.triangle}></View><Text>Наши сотрудники = наша семья</Text> 
    {dots}
      </View>
     <Workers />
     <View style={styles.titlePersonal}><View style={styles.triangle}></View><Text>Награды, достижения и сертификаты</Text> 
   {dots}
      </View>
      <Slider />
      <View style={styles.titlePersonal}><View style={styles.triangle}></View><Text>Наши активные Вакансии</Text> 
    {dots}
      </View>
      <Vacansies />
    </View>
    
    </ScrollableScreen>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 25,
    fontWeight: 700,
    marginTop: 15,
    marginLeft: 15,
  },
  blockInfo: {
    borderRadius: 12,
    borderWidth: 3, 
    borderColor: 'black',
    padding: 20,
    margin: 15,
    marginTop: 25,
    marginBottom: 35,
  },
  textInfo: {
    fontSize: 18,
  },
  title: {
    position: 'relative',
    
    fontSize: 27,
    marginBottom: 5,
  },
  titlePersonal: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,

  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 0, 
    borderBottomWidth: 15, 
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'red',
  },
  dot: {
    width: 1,
    height: 1,
    backgroundColor: 'gray',
    margin: 0,
    marginVertical: 0.8,
    position: 'relative',
    top: 3,
  },
  row: {
   
  },
});

export default ContactPage;
