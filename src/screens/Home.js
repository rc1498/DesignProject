import React from 'react';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';
import Colors from '../themes/Colors';
import normalise from '../utils/helpers/dimen';
import MyStatusBar from '../utils/helpers/MyStatusBar';
import {listData} from '../utils/dummyData';
import Button from '../components/Button';
import Header from '../components/Header';
import ActionSheet from '../components/ActionSheet';
import ListComponent from '../components/ListComponent';

const customHeight =
  Dimensions.get('window').height > 736
    ? Platform.OS === 'ios'
      ? 1.8
      : 1.7
    : Platform.OS === 'ios'
    ? 2.0
    : 2.1;
    
export default function Home(props) {
  return (
    <View style={{flex: 1, backgroundColor: Colors.bluePgBg}}>
      <MyStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.bluePgBg}
      />
      <SafeAreaView style={{flex: 1}}>
        <Header page={'Home'} title={'Hello Sandra,'} />
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text
            style={{
              color: Colors.white,
              fontSize: normalise(12),
              marginTop: normalise(40),
            }}>
            Your current balance is
          </Text>

          <Text
            style={{
              color: Colors.white,
              fontSize: normalise(30),
              fontWeight: 'bold',
              marginTop: normalise(10),
            }}>
            ₦ 200,000
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: normalise(30),
            }}>
            <Button
              height={normalise(48)}
              width={'48%'}
              backgroundColor={Colors.bluePgBg}
              borderWidth={1}
              borderColor={Colors.textBlue}
              title={`Request Money`}
              textColor={Colors.textBlue}
              borderRadius={normalise(6)}
              fontSize={normalise(14)}
              onPress={() => {
                props.navigation.navigate('Search');
              }}
            />

            <Button
              height={normalise(48)}
              width={'48%'}
              backgroundColor={Colors.bluePgBg}
              borderWidth={1}
              borderColor={Colors.textBlue}
              title={`Send Money`}
              textColor={Colors.textBlue}
              borderRadius={normalise(6)}
              fontSize={normalise(14)}
            />
          </View>
        </View>

        <ActionSheet
          initalValue={1}
          height={Dimensions.get('window').height / customHeight}>
          <ListComponent data={listData} />
        </ActionSheet>
      </SafeAreaView>
    </View>
  );
}
