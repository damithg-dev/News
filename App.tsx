import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {RootNavigator} from './src/navigator/Root';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {BookmarkArticleProvider} from './src/realm/Service';
import {ArticleRealmContext} from './src/realm';

export default function App() {
  const {RealmProvider} = ArticleRealmContext;

  return (
    <RealmProvider>
      <BookmarkArticleProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </BookmarkArticleProvider>
    </RealmProvider>
  );
}
