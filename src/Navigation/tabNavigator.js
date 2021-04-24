import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Onboarding from '../Authentication/Onboarding'
import Icon from 'react-native-vector-icons/Ionicons'; 
import MainStackNavigator from './StackNavigator'

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    

    <Tab.Navigator
    shifting = {true}
      initialRouteName="Onboarding"
      activeColor="salmon"
      inactiveColor="papayawhip"

      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
      
        name="Onboarding"
        //component should be on boarding
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: "peachpuff",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: "peachpuff",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Profile}
        options={{
          tabBarLabel: 'Account',
          tabBarColor: "peachpuff",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
   
  );
}

export default MyTabs
