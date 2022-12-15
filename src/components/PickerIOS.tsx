import React, {useEffect, useState} from 'react';
import {View, StyleSheet, GestureResponderEvent} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Picker, PickerProps} from '@react-native-picker/picker';
import Modal from 'react-native-modal';

import {Text} from '../components/Text';
import {Colors} from '../Colors';
import {ChevronDownIcon} from '../icons/ChevronDownIcon';

import {PickerValue} from './Picker';
import {ComponentStyles} from './Styles';

interface Props extends PickerProps {
  children: React.ReactNode;
  values: PickerValue[];
  selectedValue: string | number;
  isOptional?: boolean;
  placeholderText?: string;
  onConfirm?: (value: string | number) => void;
  label: string;
}

export const PickerIOS = ({
  children,
  selectedValue: initialSelectedValue,
  isOptional = false,
  placeholderText = 'Select...',
  onConfirm = () => {},
  label,
  ...rest
}: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [pickerValue, setPickerValue] = useState<string | number>('');

  useEffect(() => {
    setPickerValue(initialSelectedValue);
  }, [initialSelectedValue]);

  const handleClose = () => {
    setPickerValue(initialSelectedValue);
    onConfirm(initialSelectedValue);
    setModalIsVisible(false);
  };

  const handleValueChange = (value: string | number) => {
    setPickerValue(value);
  };

  const handleOnConfirm = (_: GestureResponderEvent) => {
    onConfirm(pickerValue);
    setModalIsVisible(false);
  };

  return (
    <View>
      {label && <Text style={ComponentStyles.inputText}>{label}</Text>}

      <TouchableOpacity
        style={[
          ComponentStyles.input,
          {
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
          },
        ]}
        onPress={() => setModalIsVisible(!modalIsVisible)}>
        <View>
          <Text
            style={{
              color: pickerValue.toString() ? Colors.Black : Colors.GreyOff,
            }}>
            {pickerValue.toString() || placeholderText}
          </Text>
        </View>
        <View style={[ComponentStyles.inputIconWrapper]}>
          <ChevronDownIcon size={24} color={Colors.Secondary.GreyDark} />
        </View>
      </TouchableOpacity>

      <Modal
        isVisible={modalIsVisible}
        onBackdropPress={handleClose}
        backdropOpacity={0.5}
        style={styles.modal}>
        <View style={styles.content}>
          <TouchableOpacity onPress={handleOnConfirm} style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
          <Picker
            selectedValue={pickerValue.toString()}
            onValueChange={value =>
              value === '-1' ? handleValueChange('') : handleValueChange(value)
            }
            {...rest}>
            {isOptional && <Picker.Item label={placeholderText} value={'-1'} />}
            {children}
          </Picker>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  content: {
    paddingBottom: 32,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Colors.White,
  },

  button: {
    alignItems: 'center',
    paddingVertical: 12,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: Colors.Black,
  },

  buttonText: {
    color: Colors.White,
  },
});
