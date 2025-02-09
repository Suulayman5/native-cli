import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import ProductScreen from './src/screen/ProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Page" component={HomeScreen} />
        <Stack.Screen name="Product-Details" component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
