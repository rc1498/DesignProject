import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import Colors from '../themes/Colors';
import normalise from '../utils/helpers/dimen';
import MyStatusBar from '../utils/helpers/MyStatusBar';
import ImagePath from '../themes/ImagePath';
import Header from '../components/Header';
import Button from '../components/Button';

export default function NewRequest(props) {
  return (
    <View style={{flex: 1, backgroundColor: Colors.bluePgBg}}>
      <MyStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.bluePgBg}
      />

      <SafeAreaView style={{flex: 1}}>
        <Header title={'New Request'} page={'New Request'} />

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
          }}>
          <ImageBackground
            source={ImagePath.effect}
            style={{
              height: normalise(180),
              width: normalise(180),
              borderRadius: normalise(100),
              marginTop: normalise(40),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{height: '50%', width: '50%'}}
              source={ImagePath.dp}
            />
          </ImageBackground>

          <Text
            style={{
              color: Colors.white,
              fontSize: normalise(18),
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: normalise(20),
            }}>
            Adeleke Ramon
          </Text>
          <Text
            style={{
              color: Colors.white,
              fontSize: normalise(34),
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: normalise(30),
            }}>
            ₦ 200,000
          </Text>

          <Button
            marginTop={normalise(30)}
            height={normalise(50)}
            width={'45%'}
            backgroundColor={Colors.red}
            title={'Send Money'}
            textColor={Colors.white}
            borderRadius={normalise(10)}
            fontSize={normalise(14)}
          />
          <Button
            marginTop={normalise(20)}
            height={normalise(50)}
            width={'45%'}
            backgroundColor={Colors.bluePgBg}
            borderWidth={1}
            borderColor={Colors.textBlue}
            title={`Don't Send`}
            textColor={Colors.textBlue}
            borderRadius={normalise(10)}
            fontSize={normalise(14)}
          />
          <View style={{height: normalise(40)}} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
