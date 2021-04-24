import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RectButton} from "react-native-gesture-handler"

const styles = StyleSheet.create({
    container:{
      borderRadius:25,
      height:50,
      width:245,
      justifyContent: "center",
      alignItems:"center"
    },
    label:{
      //fontfamily : "SFProText-Regular",
       fontSize: 15,
       fontFamily : "SFProText-Regular",
       textAlign: "center"
    }
});


interface Buttonproprs{
  label?:String;
  variant?: "default" | "primary";
  onPress: () => void;
}

const Button = ({variant, label ,onPress}: Buttonproprs) => {

const backgroundColor = variant === "primary" ? "orange" : "lightgrey"
const color = variant === "primary" ? "white" : "midnightblue"

  return (
      <RectButton style={[styles.container , {backgroundColor}]}
      {...{ onPress }} >
        <View  >
          <Text style={[styles.label ,{color}]} >{label}</Text>
        </View>
        </RectButton>
  )
}

Button.defaultProps = { variant : "default"};

export default Button
