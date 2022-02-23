import React, {useState} from 'react';
import {View, Text, TextInput, Keyboard} from 'react-native';
import PropTypes from 'prop-types';
import normalise from '../utils/helpers/dimen';
import Colors from '../themes/Colors';
import ImageButton from './ImageButton';
import ImagePath from '../themes/ImagePath';
import Button from './Button';
import {useNavigation} from '@react-navigation/native';

export default function Header(props) {
  const navigation = useNavigation();
  const [focus, setFocus] = useState(false);

  const renderDefault = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: '68%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <ImageButton
          title={'Back'}
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={{color: Colors.white, fontSize: normalise(16)}}>
          {props.title}
        </Text>
      </View>
    );
  };

  const renderHome = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ImageButton
            showText={false}
            image={ImagePath.hamburger}
            imageHeight={normalise(42)}
            imageWidth={normalise(42)}
          />
          <Text
            style={{
              color: Colors.white,
              fontSize: normalise(16),
              marginLeft: normalise(10),
              fontWeight: 'bold',
            }}>
            {props.title}
          </Text>
        </View>

        <Button
          height={normalise(28)}
          width={normalise(78)}
          title={'Add money'}
          backgroundColor={Colors.addMoneyBg}
          textColor={Colors.addMoneyText}
        />
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <ImageButton
          title={'Back'}
          onPress={() => {
            navigation.goBack();
          }}
        />

        <TextInput
          style={{
            width: '75%',
            height: normalise(40),
            borderRadius: normalise(5),
            borderWidth: 1,
            borderColor: focus ? Colors.received : Colors.textBlue,
            paddingTop: 0,
            paddingBottom: 0,
            paddingHorizontal: normalise(10),
            backgroundColor: Colors.actionSheetBg,
            color: Colors.white,
            fontSize: normalise(12),
          }}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
            Keyboard.dismiss();
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        width: '90%',
        alignSelf: 'center',
        height: props.height,
        marginTop: normalise(15),
      }}>
      {props.page === 'New Request'
        ? renderDefault()
        : props.page === 'Home'
        ? renderHome()
        : renderSearch()}
    </View>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  page: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  page: 'New Request',
};
