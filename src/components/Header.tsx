import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet, Pressable, View} from 'react-native';
import {Text} from './Text';
import {Styles} from '../Styles';
import {Colors} from '../Colors';

interface HeaderProps {
  title: string;
  leftIcon?: JSX.Element;
  onPressLeft?: () => void;
  rightIcon?: JSX.Element;
  onPressRight?: () => void;
  backgroundColor?: 'white' | 'transparent';
}

export const Header = ({
  title,
  leftIcon,
  onPressLeft,
  rightIcon,
  onPressRight,
  backgroundColor,
}: HeaderProps) => {
  const {top} = useSafeAreaInsets();
  const getBackgroundColor = () => {
    switch (backgroundColor) {
      case 'transparent':
        return 'transparent';
      case 'white':
        return Colors.White;
    }
  };

  const renderLeftIcon = () => {
    return (
      <View style={styles.left}>
        {onPressLeft ? (
          <Pressable style={styles.touchable} onPress={onPressLeft}>
            {leftIcon}
          </Pressable>
        ) : (
          <View style={styles.touchable}>
            <View style={styles.placeHolderIcon} />
          </View>
        )}
      </View>
    );
  };

  const RenderRightIcon = () => {
    return (
      <View style={styles.right}>
        {onPressRight ? (
          <Pressable style={styles.touchable} onPress={onPressRight}>
            {rightIcon}
          </Pressable>
        ) : (
          <View style={styles.touchable}>
            <View style={styles.placeHolderIcon} />
          </View>
        )}
      </View>
    );
  };

  return (
    <View
      style={[
        {paddingTop: top},
        {
          backgroundColor: getBackgroundColor(),
          ...Styles.shadowDefault,
          shadowOffset: {
            width: 0,
            height: 2,
          },
        },
      ]}>
      <View style={styles.header}>
        {renderLeftIcon()}
        <View style={styles.content}>
          <Text style={styles.title} fontFamily={'NWB'} size={24}>
            {title}
          </Text>
        </View>
        {RenderRightIcon()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
  },

  left: {
    zIndex: 10,
  },

  content: {
    flex: 1,
    width: '100%',
  },

  right: {
    zIndex: 10,
  },

  touchable: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 4,
    paddingHorizontal: 22,
    paddingVertical: 32,
  },

  placeHolderIcon: {
    width: 24,
  },

  title: {
    textAlign: 'center',
  },
});
