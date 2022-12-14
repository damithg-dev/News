import React, {useState} from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../Colors';

import {RootStackParamList} from '../../navigator/Root';
import WebView from 'react-native-webview';
import {Pressable} from '../../components/Pressable';
import {BookmarkIcon} from '../../icons/Bookmark';
import {ArrowLeftIcon} from '../../icons/ArrowLeft';
import {OverlaySpinner} from '../../components/OverlaySpinner';
import {useBMArticle} from '../../realm/Service';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Article'>;
type RouteProps = RouteProp<RootStackParamList, 'Article'>;

export const Article = () => {
  const {goBack} = useNavigation<NavigationProps>();
  const {
    params: {article},
  } = useRoute<RouteProps>();
  const [isLoading, setIsLoading] = useState(true);
  const {addBookmark} = useBMArticle();

  const addToBookmark = () => {
    addBookmark(article);
  };

  return (
    <View style={styles.root}>
      <WebView
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
        }}
        source={{uri: article.articleUrl}}
      />
      {isLoading && (
        <View style={StyleSheet.absoluteFill}>
          <OverlaySpinner />
        </View>
      )}
      <Pressable
        style={styles.topButton}
        onPress={goBack}
        containerStyle={styles.topButtonContainer}>
        <ArrowLeftIcon size={25} color={Colors.Black} />
      </Pressable>
      <Pressable
        onPress={addToBookmark}
        style={styles.bottomButton}
        containerStyle={styles.bottomButtonContainer}>
        <BookmarkIcon size={25} color={Colors.Black} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  topButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  topButtonContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.GreySoft,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButton: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  bottomButtonContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: Colors.GreySoft,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
