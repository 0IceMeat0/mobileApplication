import { StyleSheet, Text, View } from "react-native";


const Vacansies = () => {

  return(
    <View style={styles.blockInfo}>
  
        <Text style={styles.textInfo}>
1) Дизайнер графики
</Text>
<Text style={styles.textInfo}>
2) Модератор социальных ресурсов
</Text>
<Text style={styles.title}>
Обязанности:
</Text>
<Text style={styles.textInfo}>
1) Оформление страницы сообществ, групп и других ресурсах;
</Text>
<Text style={styles.textInfo}>
2) Наполнение групп контентом (статьи, медиа);
</Text>
<Text style={styles.textInfo}>
3) Привлечение новых пользователей;
</Text>
<Text style={styles.textInfo}>
4) Поддержание активности в сообществе, группах, других ресурсах путём создания тематических обсуждений;
</Text>
<Text style={styles.textInfo}>
5) Редактирование сообщений пользователей и удаление спама;
</Text>
<Text style={styles.textInfo}>
6) Реклама и продвижение сообществ, групп, других ресурсах и на других сайтах, форумах, похожих по формату;
</Text>
<Text style={styles.textInfo}>
7) Увиличения уровня активности в сообществе, группе, и других ресурсах</Text>
        </View>
  )
}
const styles = StyleSheet.create({
  blockInfo: {
    borderRadius: 12,
    borderWidth: 3, 
    borderColor: 'black',
    padding: 20,
    margin: 15,
    marginTop: 25,
    marginBottom: 35,
  },
  title:{
    fontSize: 22,
    marginVertical: 15,
  },
  textInfo: {
    fontSize: 18,
    marginVertical: 3,
  },
})
export default Vacansies;