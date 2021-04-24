import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// import Home from "../Component/Home";
// import About from "../Component/About";
// import Contact from "../Component/Contact";
import Welcome from "../Authentication/Welcome"
import { Home, Onboarding } from "../Authentication";

const Stack = createStackNavigator();

// const screenOptionStyle = {
//   headerStyle: {
//     backgroundColor: "#9AC4F8",
//   },
//   headerTintColor: "white",
//   headerBackTitle: "Back",
// };

const MainStackNavigator = () => {
  return (
    <Stack.Navigator >
       <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="login" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="About" component={About} /> */}
    </Stack.Navigator>
  );
}

// const ContactStackNavigator = () => {
//   return (
//     <Stack.Navigator >
//       <Stack.Screen name="Contact" component={Contact} />
//     </Stack.Navigator>
//   );
// }

// export { MainStackNavigator, ContactStackNavigator };
export default MainStackNavigator;