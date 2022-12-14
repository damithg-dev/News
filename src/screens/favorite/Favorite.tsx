import React, {useCallback} from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../Colors';

import {TabNavigatorParamList} from '../../navigator/Tab';
import {RootStackParamList} from '../../navigator/Root';
import {useBMArticle} from '../../realm/Service';
import {FlashList} from '@shopify/flash-list';
import {ArticleCard} from '../../components/ArticleCard';

type NavigationProps = CompositeNavigationProp<
  StackNavigationProp<TabNavigatorParamList, 'Favorite'>,
  StackNavigationProp<RootStackParamList>
>;

export const Favorite = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {bookmarkArticle} = useBMArticle();

  const navigateToArticle = useCallback(
    (article: Article) => {
      navigate('Article', {
        article,
      });
    },
    [navigate],
  );

  return (
    <View style={styles.root}>
      <FlashList
        scrollEnabled={false}
        data={bookmarkArticle}
        contentContainerStyle={styles.list}
        renderItem={({item}) => {
          return (
            <ArticleCard
              onPress={() => navigateToArticle(item)}
              article={item}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  list: {
    paddingTop: 50,
  },
});
