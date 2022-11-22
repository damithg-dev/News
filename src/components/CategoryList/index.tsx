import React, {useRef, useState} from 'react';
import {StyleSheet, View, ListRenderItem, FlatList} from 'react-native';
import {ArticleCategories} from '../../types/appEnums';
import {Card} from './Card';

interface CategoryCarouselProps {
  onPress: () => void;
}

export const CategoryCarousel = ({onPress}: CategoryCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const renderItem: ListRenderItem<string> = ({item, index}) => (
    <Card
      key={index}
      title={item}
      isSelected={selectedIndex === index}
      onPress={() => setSelectedIndex(index)}
    />
  );

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  const categories = [
    ArticleCategories.Business,
    ArticleCategories.Entertainment,
    ArticleCategories.General,
    ArticleCategories.Health,
    ArticleCategories.Science,
    ArticleCategories.sports,
    ArticleCategories.Technology,
  ];

  return (
    <>
      <FlatList
        data={categories}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        bounces={false}
        decelerationRate={'fast'}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={renderItemSeparator}
        disableIntervalMomentum
      />
    </>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 24,
    marginVertical: 16,
  },
  itemSeparator: {
    width: 8,
  },
  paginationContainer: {
    marginBottom: 24,
  },
});
