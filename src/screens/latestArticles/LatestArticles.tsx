import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../Colors';

import {RootStackParamList} from '../../navigator/Root';
import {FlashList} from '@shopify/flash-list';
import {ArticleCard} from '../../components/ArticleCard';
import {useLatestArticles} from '../../context/Articles';
import {Spinner} from '../../components/Spinner';
import {SpinnerStyle} from '../../types/appEnums';
import {Header} from '../../components/Header';
import {ArrowLeftIcon} from '../../icons/ArrowLeft';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Latest'>;

export const LatestArticles = () => {
  const {navigate, goBack} = useNavigation<NavigationProps>();
  const {articles, loading} = useLatestArticles();

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
      <Header
        title={'Latest News'}
        leftIcon={<ArrowLeftIcon size={24} color={Colors.Black} />}
        onPressLeft={() => goBack()}
        backgroundColor={'white'}
      />
      {loading ? (
        <>
          <View style={styles.spinnerContainer}>
            <Spinner size={'small'} renderStyle={SpinnerStyle.Fluid} />
          </View>
        </>
      ) : (
        <FlashList
          data={articles}
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
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  list: {
    paddingTop: 20,
  },
  spinnerContainer: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});
