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
import {ArrowRight} from '../../../icons/ArrowRight';
import {LatestNewsCard} from './LatestNewsCard';

const {width} = Dimensions.get('window');
const itemSeparatorWidth = 20;
const itemWidth = width * 0.8;

interface LatestNewsCarouselProps {
  onPressSeeMore: () => {};
}

export const LatestNewsCarousel = ({
  onPressSeeMore,
}: LatestNewsCarouselProps) => {
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
        <Pressable onPress={onPressSeeMore} style={styles.buttonRight}>
          <>
            <Text fontFamily="NSB" size={12} color={Colors.Secondary}>
              See All
            </Text>
            <ArrowRight size={12} color={Colors.Secondary} />
          </>
        </Pressable>
      </View>
      <Animated.FlatList
        data={[]}
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
    paddingHorizontal: itemSeparatorWidth * 2,
    marginBottom: 20,
    marginTop: 40,
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
  },
  buttonRight: {
    paddingRight: 24,
  },
  buttonLeftText: {
    marginLeft: 24,
  },
});
