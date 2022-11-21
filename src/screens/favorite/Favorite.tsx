import React from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../Colors';

import {TabNavigatorParamList} from '../../navigator/Tab';
import {RootStackParamList} from '../../navigator/Root';

type NavigationProps = CompositeNavigationProp<
  StackNavigationProp<TabNavigatorParamList, 'Favorite'>,
  StackNavigationProp<RootStackParamList>
>;

export const Favorite = () => {
  const {navigate} = useNavigation<NavigationProps>();
  return (
    <View style={styles.root}>
      <ScrollView>
        <></>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});
