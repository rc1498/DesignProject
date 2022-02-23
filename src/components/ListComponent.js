import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Platform,
  Dimensions,
} from 'react-native';
import Colors from '../themes/Colors';
import normalise from '../utils/helpers/dimen';
import ImagePath from '../themes/ImagePath';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native-safe-area-context';

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

  function renderItem(data) {
    return (
      <TouchableOpacity
        key={data.item.name + Date.now()}
        style={{
          width: '100%',
          backgroundColor:
            data.index % 2 !== 0 ? Colors.bluePgBg : Colors.listComponent,
          height: normalise(75),
          marginBottom:
            data.index === props.data.length - 1 ? normalise(41) : 0,
          paddingHorizontal: normalise(15),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Image
          source={data.item.dp}
          style={{height: normalise(40), width: normalise(40)}}
        />

        <View
          style={{
            width: '55%',
            marginLeft: normalise(5),
          }}>
          <Text
            style={{
              color: Colors.listComponentText,
              fontSize: normalise(15),
              fontWeight: 'bold',
              marginTop: normalise(-2),
            }}
            numberOfLines={1}>
            {data.item.name}
          </Text>

          <View
            style={{
              height: normalise(25),
              width: normalise(90),
              paddingLeft: normalise(8),
              borderRadius: normalise(20),
              backgroundColor:
                data.item.status === 'Received'
                  ? Colors.received
                  : data.item.status === 'Sent'
                  ? Colors.sent
                  : Colors.red,
              marginTop: normalise(5),
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={
                data.item.status === 'Received'
                  ? ImagePath.received
                  : data.item.status === 'Sent'
                  ? ImagePath.sent
                  : ImagePath.failed
              }
              style={{
                height: normalise(16),
                width: normalise(16),
              }}
            />
            <Text
              style={{
                marginLeft: normalise(8),
                color: Colors.white,
                fontSize: normalise(12),
              }}>
              {data.item.status}
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: normalise(14),
            fontWeight: 'bold',
            textAlign: 'right',
            color:
              data.item.status === 'Received'
                ? Colors.received
                : data.item.status === 'Sent'
                ? Colors.sent
                : Colors.red,
          }}
          numberOfLines={1}>
          {data.item.money}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView
      style={{
        marginTop:
          Platform.OS === 'ios'
            ? normalise(0)
            : Dimensions.get('window').height > 736
            ? normalise(25)
            : normalise(10),
      }}>
      {/* LIST HEADER */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: normalise(15),
        }}>
        <Text
          style={{
            color: Colors.white,
            fontSize: normalise(14),
            fontWeight: 'bold',
          }}>
          All Transactions
        </Text>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: Colors.controlBar, fontSize: normalise(12)}}>
            Sort by:{' '}
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: normalise(5),
            }}>
            <Text style={{color: Colors.white, fontSize: normalise(12)}}>
              Recent
            </Text>
            <Image
              source={ImagePath.back}
              style={{
                height: normalise(12),
                width: normalise(12),
                transform: [{rotate: '-90deg'}],
                marginLeft: normalise(5),
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* LIST */}
      <FlatList
        data={props.data}
        keyExtractor={(item, index) => {
          index.toString();
        }}
        style={{marginTop: normalise(20)}}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

ListComponent.propTypes = {
  data: PropTypes.array,
  onPress: PropTypes.func,
  onPressNavigate: PropTypes.func,
};

ListComponent.defaultProps = {
  data: [],
  onPress: null,
  onPressNavigate: null,
};
