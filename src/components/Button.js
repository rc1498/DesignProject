import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import normalise from '../utils/helpers/dimen';
import Colors from '../themes/Colors';

export default function Button(props) {
  return (
    <TouchableOpacity
      style={{
        height: props.height,
        width: props.width,
        borderRadius: props.borderRadius,
        backgroundColor: props.backgroundColor,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: props.marginTop,
      }}
      onPress={() => {
        if (props.onPress) {
          props.onPress();
        }
      }}>
      <Text style={{color: props.textColor, fontSize: props.fontSize}}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
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
  onPress: PropTypes.func
};

Button.defaultProps = {
  height: normalise(35),
  width: normalise(95),
  borderRadius: normalise(5),
  backgroundColor: Colors.white,
  borderWidth: 0,
  borderColor: '',
  textColor: Colors.darkBlue,
  fontSize: normalise(12),
  marginTop: 0,
  onPress: null
};
