import React from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../Colors';

import {TabNavigatorParamList} from '../../navigator/Tab';
import {RootStackParamList} from '../../navigator/Root';
import {SearchInput} from '../../components/SearchInput';
import {LatestNewsCarousel} from './components/LatestNewsCarousel';
import {FlashList} from '@shopify/flash-list';
import {useLatestArticle} from '../../context/LatestArticles';
import {ArticleCard} from '../../components/ArticleCard';
import {CategoryCarousel} from '../../components/CategoryList';

type NavigationProps = CompositeNavigationProp<
  StackNavigationProp<TabNavigatorParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

export const Home = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const {articles} = useLatestArticle();

  return (
    <View style={styles.root}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 16,
          marginHorizontal: 24,
        }}>
        <SearchInput
          style={styles.search}
          onChange={value => {}}
          onClose={() => {}}
        />
      </View>
      <ScrollView>
        <>
          <LatestNewsCarousel onPressSeeMore={() => {}} />
          <CategoryCarousel />
          <FlashList
            scrollEnabled={false}
            data={articles}
            renderItem={({item}) => {
              return <ArticleCard onPress={() => {}} article={item} />;
            }}
          />
        </>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  search: {
    marginTop: 16,
    marginHorizontal: 24,
  },
});
