import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/home/Home';
import {HomeIcon} from '../icons/Home';
import {Favorite} from '../screens/favorite/Favorite';
import {TabBar} from '../components/TabBar';
import {BookmarkIcon} from '../icons/Bookmark';

export type TabNavigatorParamList = {
  Home: undefined;
  Favorite: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={TabBar}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          headerShown: false,
          tabBarLabel: 'BoolMark',
          tabBarIcon: BookmarkIcon,
        }}
      />
    </Tab.Navigator>
  );
};
