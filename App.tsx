// import 'react-native-gesture-handler';
// import * as React from 'react';
// //import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Onboarding from './src/Authentication/Onboarding'
// import Welcome from './src/Authentication/Welcome'
// import { LoadAssets } from './src/Components';
// import TabNavigator from './src/TabNavigator';
// import {StyleSheet, Text, View,Button} from 'react-native';  
// import TabNavigation from './src/Authentication/Onboarding/TabNavigation';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import Details from './src/Authentication/Onboarding';
// import Account from './src/Authentication/Onboarding'


// const fonts = {
//   "SFProText-Bold": require("./assets/SF-Pro-Text-Bold.otf"),
//   "SFProText-Semibold": require("./assets/SF-Pro-Text-Semibold.otf"),
//   "SFProText-Regular": require("./assets/SF-Pro-Text-Regular.otf"),
// };

// const AuthenticationStack = createStackNavigator();

// const AuthenticationNavigator = () => {

// return( <AuthenticationStack.Navigator headerMode="none" >
//   {/* <AuthenticationStack.Screen name="Tab" component={TabNavigation} /> */}
//     <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
//     <AuthenticationStack.Screen name="Welcome" component={Welcome} />
//  </AuthenticationStack.Navigator>
//  );
 
// };

// export default function App() {
//   return (
   
   
//       <LoadAssets {...{ fonts }}>
//     {/* // <NavigationContainer> */}
//      <View>
       
//      </View>
//           <AuthenticationNavigator/>
//         {/* //  </NavigationContainer> */}
//          </LoadAssets>
        
//   );
// }
//////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react'
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// //import HomeScreen from './HomeScreen';
// import Details from './src/Authentication/Onboarding';
// import Account from './src/Authentication/Onboarding'
// import Onboarding from './src/Authentication/Onboarding'
// import {StyleSheet, Text, View,Button} from 'react-native'; 

// const Tab = createMaterialBottomTabNavigator();

// function App() {
//   return (
    
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Onboarding} />
//       <Tab.Screen name="Details" component={Details} />
//       <Tab.Screen name="Account" component={Account} />
//     </Tab.Navigator>
//   );
// }

// export default App
//////////////////////////////////////////////////////////////////////////////////////
// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { Onboarding } from './src/Authentication';
// // import { Account } from './src/Authentication';
// // import { Details } from './src/Authentication';
// import { LoadAssets } from './src/Components';

// const fonts = {
//     "SFProText-Bold": require("./assets/SF-Pro-Text-Bold.otf"),
//     "SFProText-Semibold": require("./assets/SF-Pro-Text-Semibold.otf"),
//     "SFProText-Regular": require("./assets/SF-Pro-Text-Regular.otf"),
//   };

// function Details() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Details</Text>
//     </View>
//   );
// }

// function Account() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Account!</Text>
//     </View>
//   );
// }


// // const AuthenticationStack = createStackNavigator(); 
// const Tab = createMaterialBottomTabNavigator();

// const TabScreenNavigator = () => {

// return( 
//   //  <NavigationContainer>    
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={Onboarding} />
//     <Tab.Screen name="Details" component={Details} /> 
//     <Tab.Screen name="Account" component={Account} />   
//   </Tab.Navigator>     
// /* </NavigationContainer> */
//  );
 
// };




// export default function App() {
//   return (
//     <LoadAssets {...{ fonts }}>
//      <TabScreenNavigator/>
//    </LoadAssets> 
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////
import * as React from 'react';
import { Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';  
import Onboarding from './src/Authentication/Onboarding'
import { LoadAssets } from './src/Components';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/Authentication/Welcome'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from "./src/Navigation/tabNavigator"

const fonts = {
    "SFProText-Bold": require("./assets/SF-Pro-Text-Bold.otf"),
    "SFProText-Semibold": require("./assets/SF-Pro-Text-Semibold.otf"),
    "SFProText-Regular": require("./assets/SF-Pro-Text-Regular.otf"),
  };




export default function App() {
  return (
   
  
      //  <LoadAssets {...{ fonts }}>
        
      // <MyTabs />
      // </LoadAssets>
      // <NavigationContainer>
         <LoadAssets {...{ fonts }}>
         <BottomTabNavigator/>
         </LoadAssets>
      /* </NavigationContainer> */
    
  );
}