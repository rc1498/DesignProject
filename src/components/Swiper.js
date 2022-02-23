import React, {useState, useRef, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import normalise from '../utils/helpers/dimen';
import Colors from '../themes/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Swiper(props) {
  const [currIndex, setCurrIndex] = useState(props.currentIndex);
  const intervalId = useRef(null);
  const items = props.children ? [...props.children] : [];

  useEffect(() => {
    if (items.length > 1) {
      setIntervalFn();
    }
    return () => {
      console.log('exiting');
      clearInterval(intervalId.current);
    };
  }, []);

  const setIntervalFn = () => {
    intervalId.current = setInterval(() => {
      if (items.length > 1) {
        console.log('here');
        setCurrIndex(currIndex =>
          currIndex + 1 === props.children.length ? 0 : currIndex + 1,
        );
      }
    }, 4000);
  };

  const onPressDot = index => {
    if (currIndex !== index) {
      clearInterval(intervalId.current);
      setCurrIndex(index);
      setIntervalFn();
    }
  };

  const swiperDots = () => {
    let view = <View />;
    if (items.length > 0) {
      view = (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
          }}>
          {items.map((item, index) => {
            return (
              <TouchableOpacity
                style={{
                  height: currIndex === index ? normalise(10) : normalize(11),
                  width: currIndex === index ? normalise(35) : normalise(15),
                  borderRadius: normalise(10),
                  backgroundColor:
                    currIndex === index ? Colors.darkYellow : Colors.yellow,
                  marginLeft: index !== 0 ? normalise(4) : 0,
                }}
                onPress={() => {
                  onPressDot(index);
                }}
              />
            );
          })}
        </View>
      );
    }
    return view;
  };

  const renderChildren = () => {
    let children = <View />;
    if (items.length > 0) {
      children = items.map((item, index) => {
        return currIndex === index ? item : <View />;
      });
    }
    return children;
  };

  return (
    <View style={{height: props.height, width: props.width}}>
      <SafeAreaView >
        {swiperDots()}
        {renderChildren()}
      </SafeAreaView>
    </View>
  );
}

Swiper.propTypes = {
  currentIndex: PropTypes.number,
  height: PropTypes.any,
  width: PropTypes.any,
};

Swiper.defaultProps = {
  currentIndex: 0,
  height: '100%',
  width: '100%',
};
