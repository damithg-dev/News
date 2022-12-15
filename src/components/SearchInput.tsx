import React from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Colors} from '../Colors';
import {SearchIcon} from '../icons/Search';
import {XIcon} from '../icons/XIcon';
import {Text} from './Text';

interface SearchInputProps {
  value?: string;
  onChange: (value: string) => void;
  onClose?: () => void;
  placeholder?: string;
  autoFocus?: boolean;
  style?: ViewStyle;
  editable?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  isFocus?: boolean;
}

export const SearchInput = ({
  value,
  placeholder,
  autoFocus,
  style,
  editable = true,
  onChange,
  onClose,
  onFocus,
  onBlur,
  isFocus,
}: SearchInputProps) => (
  <View style={[styles.container, style]}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={Colors.Grey}
      value={value}
      onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        onChange(e.nativeEvent.text);
      }}
      autoFocus={autoFocus}
      editable={editable}
      onFocus={onFocus}
      onBlur={onBlur}
    />

    {isFocus && (
      <TouchableWithoutFeedback containerStyle={styles.close} onPress={onClose}>
        <XIcon size={24} color={Colors.Grey} />
      </TouchableWithoutFeedback>
    )}
    <View style={styles.icon}>
      <SearchIcon size={22} color={Colors.Grey} />
    </View>
  </View>
);

type SearchButtonProps = {
  text: string;
  style: ViewStyle;
  textStyle?: TextStyle;
  onPress: () => void;
};

export const SearchButton = ({
  text,
  style,
  textStyle = {width: '100%'},
  onPress,
}: SearchButtonProps) => (
  <TouchableWithoutFeedback style={[styles.container, style]} onPress={onPress}>
    <Text style={[styles.text, textStyle]} size={0} color={''}>
      {text}
    </Text>

    <View style={styles.icon}>
      <SearchIcon color={Colors.Grey} />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    paddingLeft: 54,
    paddingRight: 24,
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.Grey,
  },

  text: {
    color: Colors.Black,
  },

  input: {
    flex: 1,
    height: 40,
    borderRadius: 25,
    paddingRight: 24,
    fontSize: 16,
    color: Colors.Black,
  },

  icon: {
    position: 'absolute',
    left: 20,
    // top: 14,
  },

  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 40,
    zIndex: 10,
  },
});
