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
import {Text} from '../../../components/Text';
import {Styles} from '../../../Styles';

const {width} = Dimensions.get('window');
const itemWidth = width * 0.8;

interface LatestArticleCardProps {
  article: Article;
  onPress: () => void;
}

export const LatestArticleCard = ({
  article,
  onPress,
}: LatestArticleCardProps) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={[Styles.card, styles.container]}>
      <ImageLoader
        style={styles.fillImage}
        source={{
          uri: article.imageUrl,
          priority: FastImage.priority.high,
        }}
      />
      <View style={[StyleSheet.absoluteFill, styles.blurContainer]} />
      <View style={[StyleSheet.absoluteFill, styles.detailContainer]}>
        <View style={styles.titleContainer}>
          {article.author && (
            <Text color={Colors.White} fontFamily={'NEB'} size={10}>
              {`by ${article.author}`}
            </Text>
          )}
          {article.title && (
            <Text color={Colors.White} size={16} fontFamily={'NWB'}>
              {article.title}
            </Text>
          )}
        </View>
        {article.description && (
          <Text color={Colors.White} size={10} fontFamily={'NR'}>
            {article.description}
          </Text>
        )}
      </View>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    width: itemWidth,
    aspectRatio: 3 / 2,
    padding: 0,
    borderRadius: 20,
    backgroundColor: Colors.White,
  },

  fillImage: {
    width: itemWidth,
    flex: 1,
    borderRadius: 20,
    backgroundColor: Colors.Black,
  },
  blurContainer: {
    flex: 1,
    backgroundColor: Colors.Black,
    opacity: 0.6,
    borderRadius: 20,
  },
  detailContainer: {
    flex: 1,
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titleContainer: {
    marginBottom: 16,
  },
});
