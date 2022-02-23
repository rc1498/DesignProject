import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import NewRequest from '../screens/NewRequest';
import Search from '../screens/Search';
import Home from '../screens/Home';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'Splash'} component={Splash} />
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'NewRequest'} component={NewRequest} />
        <Stack.Screen name={'Search'} component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
