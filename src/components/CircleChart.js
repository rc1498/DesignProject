import React, {useState, forwardRef, useImperativeHandle} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Colors from '../themes/Colors';
import normalise from '../utils/helpers/dimen';
import ImagePath from '../themes/ImagePath';

function CircleChart(props, ref) {
  const [selected, setSelected] = useState(-1);

  function onPress() {
    if (props.onPress) {
      props.onPress();
    }
  };

  useImperativeHandle(ref, ()=>{
    return{
      resetState(){
        setSelected(-1)
      }
    }
  });

  return (
    <View
      style={{
        height: normalise(320),
        width: normalise(320),
        alignSelf: 'center',
        borderRadius: normalise(200),
        borderWidth: 0.5,
        borderColor: Colors.circleBorder,
        marginTop: normalise(20),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          height: '70%',
          width: '70%',
          borderRadius: normalise(200),
          borderWidth: 0.5,
          borderColor: Colors.circleBorder,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <RenderCircles
          image={ImagePath.dp3}
          position={{position: 'absolute', top: -30}}
          title={'Adeloyin Leke'}
          item={0}
          selected={selected}
          onPress={() => {
            setSelected(0);
            onPress();
          }}
        />

        <RenderCircles
          image={ImagePath.dp2}
          position={{position: 'absolute', bottom: -45}}
          title={'Adeloyin Leke'}
          item={1}
          selected={selected}
          onPress={() => {
            setSelected(1);
            onPress();
          }}
        />

        <RenderCircles
          image={ImagePath.dp3}
          position={{position: 'absolute', left: -50, top: 50}}
          title={'Adeloyin Leke'}
          item={2}
          selected={selected}
          onPress={() => {
            setSelected(2);
            onPress();
          }}
        />

        <RenderCircles
          image={ImagePath.dp4}
          position={{position: 'absolute', right: -50, bottom: 30}}
          title={'Adeloyin Leke'}
          item={3}
          selected={selected}
          onPress={() => {
            setSelected(3);
            onPress();
          }}
        />

        <View
          style={{
            height: '60%',
            width: '60%',
            borderRadius: normalise(200),
            borderWidth: 0.5,
            borderColor: Colors.circleBorder,
          }}>
          <RenderCircles
            image={ImagePath.dp4}
            position={{position: 'absolute', left: -60, bottom: 0}}
            title={'Adolph colleague'}
            item={4}
            selected={selected}
            onPress={() => {
              setSelected(4);
              onPress();
            }}
          />

          <RenderCircles
            image={ImagePath.dp}
            position={{position: 'absolute', right: -50, bottom: 70}}
            title={'Adeloyin Leke'}
            height={normalise(60)}
            width={normalise(60)}
            borderRadius={normalise(60)}
            item={5}
            selected={selected}
            onPress={() => {
              setSelected(5);
              onPress();
            }}
          />
        </View>
      </View>
    </View>
  );
}

function RenderCircles(props) {
  return (
    <TouchableOpacity
      style={[{alignItems: 'center'}, props.position]}
      onPress={() => {
        if (props.onPress) {
          props.onPress();
        }
      }}>
      <Image
        style={{
          height: props.height || normalise(40),
          width: props.width || normalise(40),
          borderRadius: props.borderRadius || normalise(40),
          borderWidth: normalise(3),
          borderColor:
            props.selected === props.item ? Colors.received : Colors.white,
        }}
        source={props.image}
      />
      <Text
        style={{
          marginTop: normalise(5),
          color: props.selected === props.item ? Colors.received : Colors.white,
          fontSize: normalise(12),
          fontWeight: 'bold',
        }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

export default forwardRef(CircleChart);
