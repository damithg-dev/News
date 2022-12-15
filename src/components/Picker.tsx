import React, {useRef} from 'react';
import {View, StyleSheet, Platform, Pressable} from 'react-native';
import {
  Picker as RNPicker,
  PickerProps as RNPickerPros,
} from '@react-native-picker/picker';

import {ChevronDownIcon} from '../icons/ChevronDownIcon';
import {PickerIOS} from './PickerIOS';
import {Colors} from '../Colors';
import {Spinner} from './Spinner';
import {Text} from './Text';
import {ComponentStyles} from './Styles';

export type PickerValue = {
  label: string;
  value: string;
};

interface PickerProps extends RNPickerPros {
  selectedValue: string | number;
  values: PickerValue[];
  isOptional?: boolean;
  placeholderText?: string;
  onSelect: (value: string | number) => void;
  testID?: string;
  loading?: boolean;
  label: string;
  isError?: boolean;
  errorMessage?: string;
  touched?: boolean;
  onClose?: () => void;
}

export const Picker = ({
  selectedValue,
  values,
  isOptional = false,
  placeholderText = 'Välj...',
  onSelect,
  testID,
  loading = false,
  label,
  isError,
  errorMessage,
  touched,
  onClose,
  ...rest
}: PickerProps) => {
  const pickerRef = useRef<any>();

  const openRNPicker = () => {
    pickerRef?.current.focus();
  };

  if (loading) {
    return (
      <View style={styles.emptyContainer}>
        <Spinner size="small" color={Colors.Black} />
      </View>
    );
  }

  return Platform.OS === 'android' ? (
    <View style={styles.container}>
      <>
        {label && <Text style={ComponentStyles.inputText}>{label}</Text>}
        <RNPicker
          ref={pickerRef}
          testID={testID}
          mode={'dropdown'}
          style={styles.picker}
          selectedValue={selectedValue.toString()}
          onValueChange={value =>
            value === '-1' ? onSelect('') : onSelect(value)
          }
          onBlur={() => {
            onClose && onClose();
          }}
          {...rest}>
          {isOptional && <Picker.Item label={placeholderText} value={'-1'} />}
          {values.map(value => (
            <Picker.Item
              key={value.value}
              label={value.label}
              value={value.value.toString()}
            />
          ))}
        </RNPicker>
        <Pressable onPress={openRNPicker} style={styles.icon}>
          <ChevronDownIcon />
        </Pressable>
      </>
      <Text style={ComponentStyles.inputError}>
        {touched && isError ? errorMessage : ' '}
      </Text>
    </View>
  ) : (
    <View>
      <PickerIOS
        label={label}
        testID={testID}
        placeholderText={placeholderText}
        values={values}
        selectedValue={selectedValue}
        isOptional={isOptional}
        onConfirm={_value => {
          onSelect(_value);
          onClose && onClose();
        }}
        {...rest}>
        {values.map(value => (
          <Picker.Item
            key={value.value}
            label={value.label}
            value={value.value}
          />
        ))}
      </PickerIOS>
    </View>
  );
};

interface PickerItemProps {
  label: string;
  value: string | number;
}

Picker.Item = ({label, value}: PickerItemProps) => (
  <RNPicker.Item label={label} value={value} />
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.Black,
    marginBottom: 20,
  },

  picker: {
    fontSize: 16,
    color: Colors.GreyOff,
    paddingVertical: 8,
    marginHorizontal: 8,
  },

  icon: {
    position: 'absolute',
    right: 16,
    top: 15,
    borderRadius: 8,
    backgroundColor: Colors.White,
  },

  emptyContainer: {
    backgroundColor: Colors.White,
    borderRadius: 10,

    height: 50,
    display: 'flex',
    justifyContent: 'center',
  },
});
