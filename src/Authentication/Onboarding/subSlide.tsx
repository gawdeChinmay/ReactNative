import { Component } from "react";
import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Button from  '../../Components/Button'
 
const styles = StyleSheet.create({

  container:{
    flex: 1,
    justifyContent:"center",
    alignItems: "center", 
  },
  subtitle:{
    fontFamily:"SFProText-Semibold",
    fontSize: 24
  },
  description:{
    fontFamily:"SFProText-Regular",
    fontSize: 16,
    lineHeight: 24,
    textAlign:"center"
  }
    
});

interface SubSlideProps{
 
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}

const SubSlide = ({subtitle,description,last, onPress}:SubSlideProps) => {
  return (
    <View style={styles.container} >
      <Text style={styles.subtitle} >{subtitle}</Text>
      <Text style={styles.description} >{description}</Text>
      
      <Button label= {last ? "Lets Get started " : "Next"}
             variant= {last ? "primary" : "default"}
             {...{ onPress }}
             
      />

       {/* <Button title = "hello" /> */}
    </View>
  )
}




export default SubSlide
