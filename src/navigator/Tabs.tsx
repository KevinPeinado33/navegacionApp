import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={ ( { route } ) => ({
        tabBarIcon: ( { color, focused, size } ) => {

          let iconName: string = '';

          switch ( route.name ) {
            case 'Tab1Screen':  
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'S1';
              break;
          }

          return <Text style={{ color }}>{ iconName }</Text>

        }
      }) }>
      <Tab.Screen name="Tab1Screen" options={{ title: 'Tab 1'}} component={ Tab1Screen } />
      <Tab.Screen name="TopTabNavigator" options={{ title: 'Tab 2'}} component={ TopTabNavigator } />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack Navigatior'}} component={ StackNavigator } />
    </Tab.Navigator>
  );
}