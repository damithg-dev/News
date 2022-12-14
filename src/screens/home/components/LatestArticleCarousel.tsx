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
import {Spinner} from '../../../components/Spinner';
import {Text} from '../../../components/Text';
import {useLatestArticles} from '../../../context/Articles';
import {ArrowRightIcon} from '../../../icons/ArrowRight';
import {SpinnerStyle} from '../../../types/appEnums';

import {LatestArticleCard} from './LatestArticleCard';

const {width} = Dimensions.get('window');
const itemSeparatorWidth = 20;
const itemWidth = width * 0.8;

interface LatestArticleCarouselProps {
  onPressSeeMore: () => void;
  onPressArticle: (article: Article) => void;
}

export const LatestArticleCarousel = ({
  onPressSeeMore,
  onPressArticle,
}: LatestArticleCarouselProps) => {
  const {loading, articles} = useLatestArticles();
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem: ListRenderItem<Article> = ({item, index}) => (
    <LatestArticleCard
      key={index}
      article={item}
      onPress={() => onPressArticle(item)}
    />
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
            <ArrowRightIcon size={12} color={Colors.Secondary} />
          </View>
        </Pressable>
      </View>
      {loading ? (
        <View style={styles.spinnerContainer}>
          <Spinner renderStyle={SpinnerStyle.Fluid} />
        </View>
      ) : (
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
      )}
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
  spinnerContainer: {
    width: itemWidth,
    height: itemWidth / 2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
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
