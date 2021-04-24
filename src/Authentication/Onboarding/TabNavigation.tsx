// import React from 'react'
// //import { View, Text } from 'react-native'
// import HomeScreen from './HomeScreen';
// import Details from './Details';
// import Account from './Account'
// import Icon from 'react-native-vector-icons'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



// const Tab = createMaterialBottomTabNavigator();


// const TabNavigation = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="HomeScreen"
//       activeColor="#e91e63"
//       barStyle={{ backgroundColor: 'tomato' }}
//     >
//       <Tab.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color }) => (
//             <Icon name="ios-home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Details"
//         component={Details}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color }) => (
//             <Icon name="bell" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Account"
//         component={Account}
//         options={{
//           tabBarLabel: 'Account',
//           tabBarIcon: ({ color }) => (
//             <Icon name="ios-account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
 
  
// }

// export default TabNavigation
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//import HomeScreen from './HomeScreen';
import Details from './Details';
import Account from './Account'
import Onboarding from './Onboarding'

const Tab = createMaterialBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Onboarding} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

export default TabNavigation