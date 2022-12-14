import React, {useState} from 'react';
import {StyleSheet, View, ListRenderItem, FlatList} from 'react-native';
import {ArticleCategoryType} from '../../types/appEnums';
import {Card} from './Card';

interface CategoryCarouselProps {
  onPress: (category: ArticleCategoryType) => void;
}

export const CategoryCarousel = ({onPress}: CategoryCarouselProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const renderItem: ListRenderItem<string> = ({item, index}) => (
    <Card
      key={index}
      title={item}
      isSelected={selectedIndex === index}
      onPress={() => {
        onPress(item as unknown as ArticleCategoryType);
        setSelectedIndex(index);
      }}
    />
  );

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />;
  };

  const categories = [
    ArticleCategoryType.General,
    ArticleCategoryType.Business,
    ArticleCategoryType.Entertainment,
    ArticleCategoryType.Health,
    ArticleCategoryType.Science,
    ArticleCategoryType.sports,
    ArticleCategoryType.Technology,
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
