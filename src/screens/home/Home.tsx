import React, {useCallback, useState} from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {Keyboard, ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors} from '../../Colors';

import {TabNavigatorParamList} from '../../navigator/Tab';
import {RootStackParamList} from '../../navigator/Root';
import {SearchInput} from '../../components/SearchInput';
import {LatestArticleCarousel} from './components/LatestArticleCarousel';
import {FlashList} from '@shopify/flash-list';
import {
  useArticlesByCategory,
  useArticlesBySearch,
} from '../../context/Articles';
import {ArticleCard} from '../../components/ArticleCard';
import {CategoryCarousel} from '../../components/CategoryList';
import {Pressable} from '../../components/Pressable';
import {ArticleCategoryType, SpinnerStyle} from '../../types/appEnums';
import {Spinner} from '../../components/Spinner';
import {GearIcon} from '../../icons/Gear';
import {FilterIcon} from '../../icons/Filter';
import {BottomModal} from '../../components/BottomModal';

type NavigationProps = CompositeNavigationProp<
  StackNavigationProp<TabNavigatorParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

export const Home = () => {
  const {navigate} = useNavigation<NavigationProps>();
  const [selectedArticle, setSelectedArticle] = useState<ArticleCategoryType>(
    ArticleCategoryType.General,
  );
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [sortOrder, setSortOrder] = useState<
    'relevancy' | 'popularity' | 'publishedAt'
  >('relevancy');
  const [showSortModal, setShowSortModal] = useState(false);

  const {articles, loading} = useArticlesByCategory(selectedArticle);
  const {articles: searchArticle, loading: loadingSearchArticle} =
    useArticlesBySearch(searchString, sortOrder);

  const {top} = useSafeAreaInsets();

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
      <View
        style={[
          styles.topContainer,
          {
            marginTop: top + 16,
          },
        ]}>
        <SearchInput
          value={searchString}
          onChange={value => {
            setSearchString(value);
          }}
          onClose={() => {
            Keyboard.dismiss();
            setSearchString('');
            setIsSearchActive(false);
          }}
          onFocus={() => {
            setIsSearchActive(true);
          }}
          isFocus={isSearchActive}
        />
        <Pressable
          onPress={() => {
            if (isSearchActive) {
              Keyboard.dismiss();
              setShowSortModal(true);
            } else {
              navigate('Settings');
            }
          }}
          containerStyle={styles.iconContainer}>
          {isSearchActive ? (
            <FilterIcon size={25} color={Colors.White} />
          ) : (
            <GearIcon size={25} color={Colors.White} />
          )}
        </Pressable>
      </View>
      <ScrollView>
        <>
          {!isSearchActive && (
            <>
              <LatestArticleCarousel
                onPressArticle={item => navigateToArticle(item)}
                onPressSeeMore={() => navigate('Latest')}
              />
              <CategoryCarousel
                onPress={category => {
                  setSelectedArticle(category);
                }}
              />
            </>
          )}
          {loading || loadingSearchArticle ? (
            <>
              <View style={styles.spinnerContainer}>
                <Spinner size={'small'} renderStyle={SpinnerStyle.Fluid} />
              </View>
            </>
          ) : (
            <FlashList
              scrollEnabled={false}
              data={isSearchActive ? searchArticle : articles}
              contentContainerStyle={styles.list}
              estimatedItemSize={100}
              renderItem={({item}) => {
                return (
                  <ArticleCard
                    onPress={() => navigateToArticle(item)}
                    article={item}
                  />
                );
              }}
            />
          )}
        </>
      </ScrollView>
      <BottomModal
        show={showSortModal}
        onClose={() => setShowSortModal(false)}
        selectedSort={sortOrder}
        onSelectedSort={t => setSortOrder(t)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  spinnerContainer: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  list: {
    paddingTop: 20,
  },
  topContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Primary,
    marginLeft: 16,
  },
});
