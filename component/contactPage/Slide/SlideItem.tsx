import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');
interface Propitem {
  item: {
    title: string,
    img: number,
    description: string,
  }
}
const SlideItem = ({item}: Propitem) => {

  return (
    <View style={styles.container}>
      <Image
        source={item.img}
        resizeMode="contain"
        
      />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',

  },
  image: {
    flex: 0.6,
    width: '100%',
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
  },
  title: {
    marginTop: 6,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    marginVertical: 6,
    marginHorizontal: 12,
    color: '#333',
    textAlign: 'center'
  },
});