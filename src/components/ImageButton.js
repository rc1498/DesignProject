import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';
import normalise from '../utils/helpers/dimen';
import Colors from '../themes/Colors';
import ImagePath from '../themes/ImagePath';

export default function ImageButton(props) {
  function onPress() {
    if (props.onPress) {
      props.onPress();
    }
  }
  return (
    <TouchableOpacity
      style={{
        height: props.height,
        width: props.width,
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: props.marginTop,
        flexDirection: 'row',
      }}
      onPress={onPress}>
      <Image
        style={{height: props.imageHeight, width: props.imageWidth}}
        resizeMode={'contain'}
        source={props.image}
      />
      {props.showText ? (
        <Text style={{color: props.textColor, fontSize: props.fontSize}}>
          {props.title}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
}

ImageButton.propTypes = {
  height: PropTypes.number,
  width: PropTypes.any,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  title: PropTypes.string,
  textColor: PropTypes.string,
  fontSize: PropTypes.number,
  marginTop: PropTypes.number,
  onPress: PropTypes.func,
  showText: PropTypes.bool,
  image: PropTypes.string,
  imageHeight: PropTypes.number,
  imageWidth : PropTypes.number
};

ImageButton.defaultProps = {
  height: normalise(35),
  width: normalise(55),
  borderRadius: normalise(5),
  backgroundColor: '',
  borderWidth: 0,
  borderColor: null,
  textColor: Colors.white,
  fontSize: normalise(12),
  marginTop: 0,
  onPress: null,
  showText: true,
  image: ImagePath.back,
  imageHeight: normalise(22),
  imageWidth: normalise(22)
};
