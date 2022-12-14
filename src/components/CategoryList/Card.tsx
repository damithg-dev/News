import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Colors} from '../../Colors';
import {capitalize} from '../../helper/string';
import {Text} from '../Text';

interface CardProps {
  title: string;
  onPress: () => void;
  isSelected: boolean;
}

export const Card = ({title, isSelected, onPress}: CardProps) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={isSelected ? styles.selectedContainer : styles.container}>
      <Text
        color={isSelected ? Colors.White : Colors.Black}
        size={12}
        fontFamily={'NSB'}>
        {capitalize(title)}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.GreySoft,
  },
  selectedContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.Primary,
    borderWidth: 1,
    borderColor: Colors.GreySoft,
  },
});
