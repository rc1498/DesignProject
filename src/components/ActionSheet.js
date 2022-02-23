import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {Dimensions, TouchableOpacity, Platform, Animated} from 'react-native';
import normalise from '../utils/helpers/dimen';
import Colors from '../themes/Colors';

function ActionSheet(props, ref) {
  const animationRef = useRef(new Animated.Value(props.initalValue)).current;

  function onClose() {
    if (props.onClose) {
      props.onClose();
    }
  }

  const controlBar = () => {
    return (
      <TouchableOpacity
        style={{
          borderTopWidth: normalise(6),
          width: normalise(80),
          borderColor: Colors.controlBar,
          alignSelf: 'center',
          borderRadius: normalise(6),
          marginTop: 20,
        }}
        onPress={() => {
          if (animationRef._value === 1) {
            onClose();
          }

          Animated.timing(animationRef, {
            toValue: animationRef._value === 0 ? 1 : 0,
            duration: 500,
          }).start();
        }}
      />
    );
  };

  const actionSheetInterpoalte = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [props.closeActionSheet ? 400 : props.height - 60, 0],
  });

  useImperativeHandle(ref, () => ({
    openActionSheet() {
      Animated.timing(animationRef, {
        toValue: 1,
        duration: 500,
      }).start();
    },
  }));

  return (
    <Animated.View
      style={{
        height: props.height,
        backgroundColor: Colors.actionSheetBg,
        width: '99%',
        alignSelf: 'center',
        borderTopLeftRadius: normalise(30),
        borderTopRightRadius: normalise(30),
        position: 'absolute',
        bottom: 0,
        transform: [
          {
            translateY: actionSheetInterpoalte,
          },
        ],
      }}>
      {controlBar()}
      {props.children}
    </Animated.View>
  );
}

export default forwardRef(ActionSheet);
