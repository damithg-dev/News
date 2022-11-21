import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors} from '../../../Colors';
import ImageLoader from '../../../components/ImageLoader';
import {Styles} from '../../../Styles';

const {width} = Dimensions.get('window');
const itemWidth = width * 0.8;

interface LatestNewsCardProps {
  article: Article;
  onPress: () => void;
}

export const LatestNewsCard = ({article, onPress}: LatestNewsCardProps) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[Styles.card, styles.container]}>
      <ImageLoader
        style={styles.fillImage}
        source={{
          uri: article.imageUrl,
          priority: FastImage.priority.high,
        }}
      />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    height: itemWidth / 2,
    padding: 0,
    borderRadius: 20,
    backgroundColor: Colors.White,
  },

  fillImage: {
    width: itemWidth,
    height: 80,
    flex: 1,
    borderRadius: 20,
  },
});
