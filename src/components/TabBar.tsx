import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Colors} from '../Colors';
import {Styles} from '../Styles';

export const TabBar = (props: BottomTabBarProps) => {
  const {state, descriptors, navigation} = props;

  const showTabBar = true;

  return (
    <>
      {showTabBar && (
        <View style={styles.container}>
          {state.routes.map((route, index) => {
            const {options} = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                style={styles.button}
                key={index}
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={() => {
                  onPress();
                }}
                onLongPress={onLongPress}>
                <View style={styles.iconWrapper}>
                  {options.tabBarIcon &&
                    options.tabBarIcon({
                      focused: isFocused,
                      color: isFocused ? Colors.Primary : Colors.Grey,
                      size: 24,
                    })}
                </View>
                <Text
                  style={[
                    styles.buttonText,
                    isFocused && styles.buttonTextFocused,
                  ]}>
                  {label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    width: '80%',
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: Colors.White,
    alignSelf: 'center',
    paddingTop: 8,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    ...Styles.shadowDefault,
  },
  iconWrapper: {
    flexDirection: 'row',
    margin: 0,
    padding: 0,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    right: -20,
  },

  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: Colors.Grey,
    fontSize: 10,
    marginTop: 4,
  },

  buttonTextFocused: {
    color: Colors.Primary,
  },
});
