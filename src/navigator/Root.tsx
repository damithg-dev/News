import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';

import {Colors} from '../Colors';
import {TabNavigator, TabNavigatorParamList} from './Tab';
import {Article} from '../screens/article/Article';
import {ArticlesProvider} from '../context/Articles';
import {LatestArticles} from '../screens/latestArticles/LatestArticles';
import {Settings} from '../screens/settings/Settings';
import {GeneralProvider} from '../context/General';

export type RootStackParamList = {
  Article: {
    article: Article;
  };
  Notification: undefined;
  Tab: NavigatorScreenParams<TabNavigatorParamList>;
  Latest: undefined;
  Settings: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <GeneralProvider>
      <ArticlesProvider>
        <RootStack.Navigator
          screenOptions={{
            presentation: 'card',
            headerShown: false,
            cardStyle: {backgroundColor: Colors.White},
            gestureEnabled: false,
          }}
          initialRouteName={'Tab'}>
          <RootStack.Screen name="Tab" component={TabNavigator} />
          <RootStack.Screen name="Article" component={Article} />
          <RootStack.Screen name="Latest" component={LatestArticles} />
          <RootStack.Screen name="Settings" component={Settings} />
        </RootStack.Navigator>
      </ArticlesProvider>
    </GeneralProvider>
  );
};
