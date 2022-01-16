import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  ImageBackground,
} from 'react-native';
import Colors from '../themes/Colors';
import normalise from '../utils/helpers/dimen';
import ImagePath from '../themes/ImagePath';
import PropTypes from 'prop-types';

export default function ListComponent(props) {
  function onPress() {
    if (props.onPress) {
      props.onPress();
    }
  }

  function onPressNavigate() {
    if (props.onPressNavigate) {
      props.onPressNavigate();
    }
  }

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: normalise(20),
      }}
      onPress={onPressNavigate}>
      <Image
        style={{
          height: normalise(30),
          width: normalise(30),
          borderRadius: normalise(30),
        }}
        source={props.image}
      />

      <View
        style={{
          width: props.showToggle ? '72%' : '90%',
          marginLeft: normalise(10),
        }}>
        <Text style={{fontSize: normalise(12), color:Colors.black}}>{props.title}</Text>
        <Text
          style={{
            fontSize: normalise(11),
            color: Colors.grey,
            marginTop: normalise(2),
          }}>
          {props.desc}
        </Text>
      </View>

      {props.showToggle ? (
        <TouchableOpacity onPress={onPress}>
          <Image
            style={{
              height: normalise(35),
              width: normalise(35),
              tintColor: props.toggleOn ? Colors.green : Colors.grey,
            }}
            source={ImagePath.toggle}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      ) : null}
    </TouchableOpacity>
  );
}

ListComponent.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  showToggle: PropTypes.bool,
  toggleOn: PropTypes.bool,
  onPress: PropTypes.func,
  onPressNavigate: PropTypes.func,
};

ListComponent.defaultProps = {
  image: '',
  title: '',
  desc: '',
  showToggle: false,
  toggleOn: false,
  onPress: null,
  onPressNavigate: null,
};
