import { FlatList, StyleSheet, View, Dimensions, Animated } from 'react-native';
import SlideItem from './SlideItem';
import Pagination from './test';
import React, { useRef } from 'react';

const { width } = Dimensions.get('screen');

const Slider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const items = [
    {
      img: require('../../../assets/images/ourAwards/1.png'),
      title: 'Леусенко А. А',
      description: 'За участие в Краевом творческом конкурсе журналистов и СМИ Кубани на темы финансовой грамотности',
    },
    {
      img: require('../../../assets/images/ourAwards/2.png'),
      title: 'Саламаха В. И.',
      description: 'Участик самого масштабного хакатона в мире',
    },
    {
      img: require('../../../assets/images/ourAwards/3.png'),
      title: 'Леусенко А. А.',
      description: 'За участие в творческом конкурсе журналистов и СМИ кубани на темы финансовой грамотности',
    },
    {
      img: require('../../../assets/images/ourAwards/4.png'),
      title: 'Леусенко А. А.',
      description: 'Основы криптоэкономики',
    },
  ];

  return (
    <View style={styles.wrap}>
      <Animated.FlatList
        data={items}
        renderItem={({ item }) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      />
      <Pagination data={items} scrollX={scrollX} />
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  wrap: {
    width,
    height: 400,
    overflow: 'hidden',
    marginTop: 45,
  },
});
