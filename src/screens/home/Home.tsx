import React from 'react';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../Colors';

import {TabNavigatorParamList} from '../../navigator/Tab';
import {RootStackParamList} from '../../navigator/Root';
import {SearchInput} from '../../components/SearchInput';

type NavigationProps = CompositeNavigationProp<
  StackNavigationProp<TabNavigatorParamList, 'Home'>,
  StackNavigationProp<RootStackParamList>
>;

export const Home = () => {
  const {navigate} = useNavigation<NavigationProps>();

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
  search: {
    marginTop: 16,
    marginHorizontal: 24,
  },
});
