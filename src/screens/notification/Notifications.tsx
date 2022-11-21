import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../Colors';

import {RootStackParamList} from '../../navigator/Root';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Notification'>;

export const Notification = () => {
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
