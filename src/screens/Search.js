import React, {useRef} from 'react';
import {SafeAreaView, View, Text, Image, Dimensions} from 'react-native';
import Colors from '../themes/Colors';
import normalise from '../utils/helpers/dimen';
import MyStatusBar from '../utils/helpers/MyStatusBar';
import ImagePath from '../themes/ImagePath';
import Header from '../components/Header';
import CircleChart from '../components/CircleChart';
import ActionSheet from '../components/ActionSheet';
import Button from '../components/Button';

export default function Search(props) {
  const actionSheetRef = useRef(null);
  const chartRef = useRef(null);

  const actionSheetContent = () => {
    return (
      <View
        style={{
          alignSelf: 'center',
          marginTop: normalise(20),
          height: '80%',
          justifyContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{height: normalise(60), width: normalise(60)}}
            source={ImagePath.dp2}
          />
          <Text
            style={{
              color: Colors.white,
              fontSize: normalise(15),
              marginTop: normalise(10),
            }}>
            Adeleke Adeyanju
          </Text>
          <Text
            style={{
              color: Colors.white,
              fontSize: normalise(12),
              marginTop: normalise(15),
            }}>
            (+234) 905 1694 275
          </Text>

          <Button
            marginTop={normalise(25)}
            height={normalise(45)}
            width={normalise(120)}
            backgroundColor={Colors.red}
            title={'Send Money'}
            textColor={Colors.white}
            borderRadius={normalise(10)}
            fontSize={normalise(14)}
            onPress={() => {
              props.navigation.navigate('NewRequest');
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.bluePgBg}}>
      <MyStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.bluePgBg}
      />
      <SafeAreaView style={{flex: 1}}>
        <Header page={'Search'} />
        <CircleChart
          ref={chartRef}
          onPress={() => {
            actionSheetRef?.current?.openActionSheet();
          }}
        />
      </SafeAreaView>

      <ActionSheet
        height={
          Dimensions.get('window').height /
          (Dimensions.get('window').height > 736 ? 2.4 : 2)
        }
        closeActionSheet={true}
        ref={actionSheetRef}
        onClose={() => {
          chartRef?.current?.resetState();
        }}
        initalValue={0}>
        {actionSheetContent()}
      </ActionSheet>
    </View>
  );
}
