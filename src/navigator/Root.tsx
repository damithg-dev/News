import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorScreenParams} from '@react-navigation/native';

import {Colors} from '../Colors';
import {TabNavigator, TabNavigatorParamList} from './Tab';
import {Article} from '../screens/article/Article';
import {Notification} from '../screens/notification/Notifications';
import {LatestArticleProvider} from '../context/LatestArticles';

export type RootStackParamList = {
  Article: {
    id: string;
  };
  Notification: undefined;
  Tab: NavigatorScreenParams<TabNavigatorParamList>;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <LatestArticleProvider>
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
        <RootStack.Screen name="Notification" component={Notification} />
      </RootStack.Navigator>
    </LatestArticleProvider>
  );
};
