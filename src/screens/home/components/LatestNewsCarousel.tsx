import React, {useRef} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  ListRenderItem,
  Dimensions,
} from 'react-native';
import {Colors} from '../../../Colors';
import {Pressable} from '../../../components/Pressable';
import {Text} from '../../../components/Text';
import {useLatestArticle} from '../../../context/LatestArticles';
import {ArrowRight} from '../../../icons/ArrowRight';
import {LatestNewsCard} from './LatestNewsCard';

const {width} = Dimensions.get('window');
const itemSeparatorWidth = 20;
const itemWidth = width * 0.8;

interface LatestNewsCarouselProps {
  onPressSeeMore: () => void;
}

export const LatestNewsCarousel = ({
  onPressSeeMore,
}: LatestNewsCarouselProps) => {
  const {loading, articles} = useLatestArticle();
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem: ListRenderItem<Article> = ({item, index}) => (
    <LatestNewsCard key={index} article={item} onPress={() => {}} />
  );

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  return (
    <>
      <View style={styles.titleContainer}>
        <Text fontFamily="NWB" size={18} style={styles.buttonLeftText}>
          Latest News
        </Text>
        <Pressable onPress={onPressSeeMore} containerStyle={styles.buttonRight}>
          <Text fontFamily="NSB" size={12} color={Colors.Secondary}>
            See All
          </Text>
          <View style={styles.iconContainer}>
            <ArrowRight size={12} color={Colors.Secondary} />
          </View>
        </Pressable>
      </View>
      <Animated.FlatList
        data={articles.slice(0, 10)}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: true,
          },
        )}
        bounces={false}
        decelerationRate={'fast'}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContainer}
        snapToInterval={itemWidth + itemSeparatorWidth}
        ItemSeparatorComponent={renderItemSeparator}
        disableIntervalMomentum
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: itemSeparatorWidth,
    marginVertical: 16,
  },
  list: {
    margin: 20,
  },
  itemSeparator: {
    width: itemSeparatorWidth,
  },
  paginationContainer: {
    marginBottom: 24,
  },

  titleContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonRight: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
  buttonLeftText: {
    marginLeft: 20,
  },
  iconContainer: {
    marginLeft: 8,
  },
});
