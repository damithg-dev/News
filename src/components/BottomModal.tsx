import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetModal,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Styles} from '../Styles';
import {Text} from './Text';
import {Colors} from '../Colors';

interface BottomModalProps {
  show: boolean;
  onClose: () => void;
  onSelectedSort: (
    sortOrder: 'relevancy' | 'popularity' | 'publishedAt',
  ) => void;
  selectedSort: 'relevancy' | 'popularity' | 'publishedAt';
}

export const BottomModal = ({
  onClose,
  show,
  onSelectedSort,
  selectedSort,
}: BottomModalProps) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const {bottom} = useSafeAreaInsets();
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  useEffect(() => {
    if (show) {
      bottomSheetRef.current?.present();
    } else {
      bottomSheetRef.current?.dismiss();
    }
  }, [show]);

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.3}
        disappearsOnIndex={0}
        appearsOnIndex={1}
        pressBehavior={'collapse'}
        enableTouchThrough={false}
      />
    ),
    [],
  );

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      enablePanDownToClose={true}
      style={Styles.shadowDefault}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      onDismiss={onClose}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={styles.bottomHandleIndicator}>
      <BottomSheetView
        style={{
          paddingBottom: bottom,
        }}
        onLayout={handleContentLayout}>
        <View style={styles.contentContainer}>
          <Text fontFamily={'NWSB'} size={24}>
            Sort By
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableWithoutFeedback
              onPress={() => onSelectedSort('relevancy')}>
              <View
                style={
                  selectedSort === 'relevancy'
                    ? styles.selectedContainer
                    : styles.container
                }>
                <Text
                  color={
                    selectedSort === 'relevancy' ? Colors.White : Colors.Black
                  }
                  size={12}
                  fontFamily={'NSB'}>
                  Relevant
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => onSelectedSort('popularity')}>
              <View
                style={
                  selectedSort === 'popularity'
                    ? styles.selectedContainer
                    : styles.container
                }>
                <Text
                  color={
                    selectedSort === 'popularity' ? Colors.White : Colors.Black
                  }
                  size={12}
                  fontFamily={'NSB'}>
                  Popularity
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => onSelectedSort('publishedAt')}>
              <View
                style={
                  selectedSort === 'publishedAt'
                    ? styles.selectedContainer
                    : styles.container
                }>
                <Text
                  color={
                    selectedSort === 'publishedAt' ? Colors.White : Colors.Black
                  }
                  size={12}
                  fontFamily={'NSB'}>
                  Published At
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  bottomHandleIndicator: {
    opacity: Platform.OS === 'android' ? 0 : 1,
  },
  contentContainer: {
    margin: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginVertical: 8,
  },

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
