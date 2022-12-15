import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Colors} from '../../Colors';
import {Header} from '../../components/Header';
import {ArrowLeftIcon} from '../../icons/ArrowLeft';
import {RootStackParamList} from '../../navigator/Root';
import {Picker} from '../../components/Picker';
import {Countries, useGeneral} from '../../context/General';

type NavigationProps = StackNavigationProp<RootStackParamList, 'Latest'>;

export const Settings = () => {
  const {goBack} = useNavigation<NavigationProps>();
  const {country, updateCountry} = useGeneral();

  return (
    <View style={styles.root}>
      <Header
        title={'Settings'}
        leftIcon={<ArrowLeftIcon size={24} color={Colors.Black} />}
        onPressLeft={() => goBack()}
        backgroundColor={'white'}
      />
      <View style={styles.picketContainer}>
        <Picker
          label={'Country'}
          selectedValue={country}
          isOptional={true}
          values={Countries.map(_c => ({label: _c.name, value: _c.name}))}
          onSelect={_value => updateCountry(_value)}
          placeholderText={'Select'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.GreyOff,
  },
  picketContainer: {
    marginHorizontal: 24,
    marginVertical: 24,
    backgroundColor: Colors.White,
    borderRadius: 20,
    padding: 8,
  },
});
