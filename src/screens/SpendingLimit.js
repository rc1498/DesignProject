import React, {useState, useRef, useEffect} from 'react';
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
  FlatList,
  TextInput,
} from 'react-native';
import Colors from '../themes/Colors';
import normalise from '../utils/helpers/dimen';
import MyStatusBar from '../utils/helpers/MyStatusBar';
import ImagePath from '../themes/ImagePath';

export default function SpendingLimit(props) {
  const options = ['5000', '10000', '20000'];
  const [limit, setLimit] = useState('');

  useEffect(()=>{
    if(global.weeklySpend !== undefined){
      setLimit(global.weeklySpend)
    }
  }, [])

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <MyStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.themeBlue}
      />
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: Dimensions.get('window').height > 736 ?'22%' : '24%',
            backgroundColor: Colors.themeBlue,
            paddingHorizontal: normalise(15),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: normalise(10),
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Image
                style={{
                  height: normalise(15),
                  width: normalise(15),
                }}
                source={ImagePath.back}
                resizeMode={'contain'}
              />
            </TouchableOpacity>

            <Image
              style={{
                height: normalise(25),
                width: normalise(25),
              }}
              source={ImagePath.Logo}
              resizeMode={'contain'}
            />
          </View>

          <Text
            style={{
              marginTop: Platform.OS ==='ios' ? normalise(20) : normalise(15),
              fontSize: normalise(22),
              color: Colors.white,
              fontWeight: 'bold',
            }}>
            Spending Limit
          </Text>
        </View>

        <View
          style={{
            flexGrow: 1,
            width: '100%',
            marginTop: normalise(-20),
            alignSelf: 'center',
            backgroundColor: Colors.white,
            borderTopRightRadius: normalise(20),
            borderTopLeftRadius: normalise(20),
            paddingHorizontal: normalise(15),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: normalise(30),
            }}>
            <Image
              style={{height: normalise(18), width: normalise(18)}}
              source={ImagePath.spend}
              resizeMode={'contain'}
            />
            <Text style={{fontSize: normalise(13), marginLeft: normalise(10)}}>
              Set a weekly debit card spending limit
            </Text>
          </View>

          <View
            style={{
              marginTop: normalise(20),
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              paddingBottom: normalise(15),
              borderColor: Colors.grey,
            }}>
            <View
              style={{
                height: normalise(25),
                width: normalise(45),
                borderRadius: normalise(4),
                backgroundColor: Colors.green,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Colors.white,
                  fontSize: normalise(12),
                }}>
                $$
              </Text>
            </View>
            <Text
              style={{
                fontSize: normalise(18),
                fontWeight: 'bold',
                fontSize: normalise(20),
                color: Colors.black,
                marginLeft: normalise(10),
              }}>
              {global.weeklySpend || ''}
            </Text>
          </View>

          <Text
            style={{
              fontSize: normalise(13),
              marginTop: normalise(20),
              color: Colors.grey,
            }}>
            Here weekly means the last 7 days - not the calendar week
          </Text>

          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: normalise(20),
            }}>
            {options.map((item, index) => {
              return (
                <TouchableOpacity
                  style={{
                    height: normalise(35),
                    width: normalise(90),
                    backgroundColor:
                       limit === item
                        ? Colors.green
                        : Colors.lightGreen,
                    borderRadius: normalise(5),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setLimit(item);
                  }}>
                  <Text
                    style={{
                      color:
                         limit === item
                          ? Colors.white
                          : Colors.green,
                      fontSize: normalise(12),
                      fontWeight: 'bold',
                    }}>
                    {'$ ' + item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <TouchableOpacity
            style={{
              width: '80%',
              height: normalise(45),
              backgroundColor: Colors.green,
              borderRadius: normalise(45),
              alignSelf: 'center',
              bottom: 10,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              global.weeklySpend = limit;
              props.navigation.goBack();
            }}>
            <Text
              style={{
                fontSize: normalise(14),
                color: Colors.white,
                fontWeight: 'bold',
              }}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}
