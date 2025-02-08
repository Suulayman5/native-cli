import * as React from 'react';
import { View, Text } from 'react-native';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';

function HomeScren() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Page" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScren} />
        <Stack.Screen name="Page" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
