import React, {FC, useState} from 'react';
import FastImage, {FastImageProps, Source} from 'react-native-fast-image';
import {Spinner} from './Spinner';
import {OverlaySpinner} from './OverlaySpinner';
// import {LogoBasic, LogoRound} from '../Constant';
import {SpinnerStyle} from '../types/appEnums';

const ImageLoader: FC<
  ImageLoaderProps &
    Omit<FastImageProps, 'source'> & {
      source: Source;
      imageCropped?: boolean;
      rounded?: boolean;
    }
> = props => {
  const {
    source,
    imageCropped,
    rounded,
    addLoading,
    overlaySpinner = true,
    forceLoading,
    ...fastimageprops
  } = props;
  const {uri, ..._source} = source;
  const [loading, setLoading] = useState(true);

  const validate = (_uri: string) => {
    let normalisedSource: string | null = '';

    normalisedSource =
      _uri && typeof _uri === 'string' && !_uri.split('http')[1] ? null : _uri;

    return _uri && _uri ? normalisedSource : _uri;
  };

  return forceLoading || (uri && !!uri.length) ? (
    <FastImage
      {...fastimageprops}
      source={{
        ..._source,
        uri: imageCropped ? uri : validate(uri!)!,
        priority: FastImage.priority.high,
      }}
      onLoadStart={() => setLoading(true)}
      onLoadEnd={() => setLoading(false)}>
      {(forceLoading || (addLoading && loading)) &&
        (overlaySpinner ? (
          <OverlaySpinner />
        ) : (
          <Spinner renderStyle={SpinnerStyle.Fluid} />
        ))}
    </FastImage>
  ) : (
    <></>
    // <FastImage {...fastimageprops} source={rounded ? LogoRound : LogoBasic} />
  );
};

interface ImageLoaderProps {
  addLoading?: boolean;
  overlaySpinner?: boolean;
  forceLoading?: boolean;
}

export default ImageLoader;
