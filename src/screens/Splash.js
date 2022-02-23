import React from 'react';
import {View, ImageBackground, Platform, Text, Dimensions} from 'react-native';
import Colors from '../themes/Colors';
import normalise from '../utils/helpers/dimen';
import MyStatusBar from '../utils/helpers/MyStatusBar';
import ImagePath from '../themes/ImagePath';
import Swiper from '../components/Swiper';
import Button from '../components/Button';
import {swiperData} from '../utils/dummyData';

export default function Splash(props) {
  const swiperItems = swiperData.map((item, index) => {
    return (
      <View
        style={{
          flexGrow: 1,
          marginTop:
            Platform.OS === 'android'
              ? Dimensions.get('window').height > 736
                ? normalise(25)
                : normalise(10)
              : Dimensions.get('window').height > 736
              ? normalise(-10)
              : normalise(15),
        }}>
        <Text
          style={{
            fontSize: normalise(15),
            color: Colors.white,
            fontWeight: 'bold',
          }}
          numberOfLines={1}>
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: normalise(13),
            color: Colors.white,
            marginTop: normalise(5),
          }}
          numberOfLines={2}>
          {item.desc}
        </Text>

        <Button
          title={'Start Banking'}
          textColor={Colors.darkBlue}
          marginTop={normalise(12)}
          onPress={() => {
            props.navigation.replace('Home');
          }}
        />
      </View>
    );
  });

  return (
    <ImageBackground style={{flex: 1}} source={ImagePath.Splash}>
      <MyStatusBar
        barStyle={'light-content'}
        backgroundColor={Platform.OS === 'android' ? Colors.themeBlue : null}
      />
      <View
        style={{
          height: normalise(180),
          width: '85%',
          backgroundColor: Colors.darkBlue,
          position: 'absolute',
          bottom: 0,
          borderTopRightRadius: normalise(40),
          justifyContent: 'center',
          paddingLeft: normalise(20),
        }}>
        <Swiper height={'75%'} width={'90%'}>
          {swiperItems}
        </Swiper>
      </View>
    </ImageBackground>
  );
}
