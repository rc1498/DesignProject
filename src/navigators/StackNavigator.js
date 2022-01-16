import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DebitCard from '../screens/DebitCard';
import SpendingLimit from '../screens/SpendingLimit';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'DebitCard'} component={DebitCard} />
        <Stack.Screen name={'SpendingLimit'} component={SpendingLimit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
