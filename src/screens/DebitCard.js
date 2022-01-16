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
import List from '../components/ListComponent';

export default function Home(props) {
  const [show, setShow] = useState(false);
  const [weeklySpend, setWeeklySpend] = useState(false);
  const [freeze, setFreeze] = useState(false);
  const [deactivate, setDeactivate] = useState(false);
  const [visible, setVisible] = useState(false);
  let cardNo = '5647341124132020';

  useEffect(() => {
    const unsuscribe = props.navigation.addListener('focus', payload => {
      setVisible(false);

      setTimeout(()=>{
        if (global.weeklySpend !== undefined) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },500)
    });

    return () => {
      unsuscribe();
    };
  }, []);

  const cardNumbers = (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: normalise(15),
      }}>

      <TextInput
        style={{
          color: Colors.white,
          fontSize: normalise(12),
          fontWeight: 'bold',
          width: '20%',
          paddingTop:0,
          paddingBottom:0
        }}
        secureTextEntry={!show}
        editable={false}
        value={cardNo.substring(0, 4)}
      />

      <TextInput
        style={{
          color: Colors.white,
          fontSize: normalise(12),
          fontWeight: 'bold',
          width: '20%',
          paddingTop:0,
          paddingBottom:0
        }}
        secureTextEntry={!show}
        editable={false}
        value={cardNo.substring(4, 8)}
      />
      <TextInput
        style={{
          color: Colors.white,
          fontSize: normalise(12),
          fontWeight: 'bold',
          width: '20%',
          paddingTop:0,
          paddingBottom:0
        }}
        secureTextEntry={!show}
        editable={false}
        value={cardNo.substring(8, 12)}
      />
      <TextInput
        style={{
          color: Colors.white,
          fontSize: normalise(12),
          fontWeight: 'bold',
          width: '20%',
          paddingTop:0,
          paddingBottom:0
        }}
        secureTextEntry={!show}
        editable={false}
        value={cardNo.substring(12, 16)}
      />
    </View>
  );

  const otherItems = (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '65%',
        marginTop: normalise(10),
      }}>
      <Text
        style={{
          fontSize: normalise(12),
          color: Colors.white,
          fontWeight: 'bold',
          width: '48%',
        }}>
        Thru: 12/20
      </Text>

      <TextInput
        style={{
          color: Colors.white,
          fontSize: normalise(12),
          fontWeight: 'bold',
          width: '48%',
          paddingTop:0,
          paddingBottom:0
        }}
        secureTextEntry={!show}
        editable={false}
        value={'CVV: 456'}
      />
    </View>
  );

  const progressBar = (progress = 0, total=5000) => {
    let progressPercent = Math.floor((+progress / +total) * 100);
    console.log(global.weeklySpend);
    if (visible) {
      return (
        <View style={{marginTop: normalise(10), marginBottom: normalise(10)}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <Text style={{fontSize: normalise(12), color:Colors.black}}>
              Debit card spending limit
            </Text>
            <Text style={{fontSize: normalise(12), color: Colors.green}}>
              {`$${progress}`}{' '}
              <Text style={{color: Colors.grey}}>{`| $${total}`}</Text>
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              height: normalise(15),
              backgroundColor: Colors.lightGreen,
              marginTop: normalise(10),
              borderRadius: normalise(20),
            }}>
            <View
              style={{
                height: '100%',
                width: `${progressPercent}%`,
                backgroundColor: Colors.green,
                borderRadius: normalise(20),
              }}
            />
          </View>
        </View>
      );
    }
  };

  const handlePress = title => {
    switch (title) {
      case 'Top-up account':
        setTopUp(!topup);
        break;

      case 'Weekly spending limit':
        setWeeklySpend(!weeklySpend);
        break;

      case 'Freeze card':
        setFreeze(!freeze);
        break;

      case 'Deactivated cards':
        setDeactivate(!deactivate);
        break;
    }
  };

  const getValues = title => {
    value = '';
    switch (title) {
      case 'Top-up account':
        value = topup;
        break;

      case 'Weekly spending limit':
        value = weeklySpend;
        break;

      case 'Freeze card':
        value = freeze;
        break;

      case 'Deactivated cards':
        value = deactivate;
        break;
    }
    return value;
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <MyStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.themeBlue}
      />
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            height: Dimensions.get('window').height > 736 ? '35%' : '40%',
            backgroundColor: Colors.themeBlue,
            paddingHorizontal: normalise(15),
          }}>
          <Image
            style={{
              height: normalise(25),
              width: normalise(25),
              alignSelf: 'flex-end',
              marginTop: normalise(10),
            }}
            source={ImagePath.Logo}
            resizeMode={'contain'}
          />
          <Text
            style={{
              fontSize: normalise(22),
              color: Colors.white,
              fontWeight: 'bold',
            }}>
            Debit Card
          </Text>
          <Text
            style={{
              marginTop: normalise(20),
              fontSize: normalise(13),
              color: Colors.white,
            }}>
            Available balance
          </Text>
          <View
            style={{
              marginTop: normalise(10),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: normalise(20),
                width: normalise(35),
                borderRadius: normalise(4),
                backgroundColor: Colors.green,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: Colors.white,
                  fontSize: normalise(11.5),
                }}>
                $$
              </Text>
            </View>
            <Text
              style={{
                fontSize: normalise(18),
                fontWeight: 'bold',
                fontSize: normalise(20),
                color: Colors.white,
                marginLeft: normalise(10),
              }}>
              3,000
            </Text>
          </View>
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
            style={{marginTop: normalise(-50), marginBottom: normalise(10)}}>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                height: normalise(34),
                width: normalise(150),
                paddingHorizontal: normalise(10),
                backgroundColor: Colors.white,
                borderTopRightRadius: normalise(5),
                borderTopLeftRadius: normalise(5),
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              onPress={() => {
                setShow(!show);
              }}>
              <Image
                style={{height: normalise(15), width: normalise(15)}}
                source={show ? ImagePath.Eye : ImagePath.Eye_Off}
              />
              <Text
                style={{
                  color: Colors.green,
                  fontSize: normalise(12),
                  marginLeft: normalise(5),
                  fontWeight: 'bold',
                }}>
                {show ? 'Hide card number' : 'Show card number'}
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: '100%',
                height: normalise(180),
                backgroundColor: Colors.green,
                borderRadius: normalise(8),
                marginTop: normalise(-5),
                paddingVertical: Platform.OS === 'ios' ? normalise(10) : normalise(5),
                paddingHorizontal: normalise(20),
              }}>
              <Image
                style={{
                  height: normalise(40),
                  width: normalise(70),
                  alignSelf: 'flex-end',
                }}
                source={ImagePath.aspire}
                resizeMode={'contain'}
              />

              <Text
                style={{
                  fontSize: normalise(20),
                  color: Colors.white,
                  fontWeight: 'bold',
                  marginTop: Platform.OS === 'ios' ? normalise(5) : 0
                }}>
                Mark Henry
              </Text>

              {cardNumbers}
              {otherItems}

              <Image
                style={{
                  height: normalise(30),
                  width: normalise(50),
                  alignSelf: 'flex-end',
                }}
                source={ImagePath.visa}
                resizeMode={'contain'}
              />
            </View>
          </View>

          <View style={{height: '55%'}}>
            {progressBar('2000', global.weeklySpend)}
            <ScrollView showsVerticalScrollIndicator={false}>
              <List
                image={ImagePath.insight}
                title={'Top-up account'}
                desc={'Deposit money to your account to use with card'}
                showToggle={false}
              />

              <List
                image={ImagePath.transfer}
                title={'Weekly spending limit'}
                desc={'You haven’t set any spending limit on card'}
                showToggle={true}
                onPress={() => {
                  handlePress('Weekly spending limit');
                }}
                onPressNavigate={() => {
                  props.navigation.navigate('SpendingLimit');
                }}
                toggleOn={getValues('Weekly spending limit')}
              />

              <List
                image={ImagePath.freeze}
                title={'Freeze card'}
                desc={'Your debit card is currently active'}
                showToggle={true}
                onPress={() => {
                  handlePress('Freeze card');
                }}
                toggleOn={getValues('Freeze card')}
              />

              <List
                image={ImagePath.deactivated}
                title={'Deactivated cards'}
                desc={'Your previously deactivated cards'}
                showToggle={true}
                onPress={() => {
                  handlePress('Deactivated cards');
                }}
                toggleOn={getValues('Deactivated cards')}
              />

              <View style={{height: normalise(100)}} />

            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
