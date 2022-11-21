import React, {forwardRef} from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Text} from './Text';
import {Colors} from '../Colors';
import {ComponentStyles} from './Styles';

interface CustomProps {
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  touched?: boolean;
  block?: boolean;
}

interface TextInputProps extends CustomProps, RNTextInputProps {}

export const TextInput = forwardRef<any, TextInputProps>(
  (
    {
      label,
      isError,
      errorMessage,
      touched,
      autoCapitalize = 'sentences',
      block,
      ...rest
    },
    ref,
  ) => {
    return (
      <>
        {label && <Text style={ComponentStyles.inputText}>{label}</Text>}
        <RNTextInput
          ref={ref}
          style={[ComponentStyles.input, block && ComponentStyles.inputBlock]}
          placeholderTextColor={Colors.Secondary.GreyHalf}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          {...rest}
        />
        <Text style={ComponentStyles.inputError}>
          {touched && isError ? errorMessage : ' '}
        </Text>
      </>
    );
  },
);
