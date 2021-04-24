import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'

const {width , height} = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.61 * height;
const styles = StyleSheet.create({
  container:{
    width,
  },
  titleContainer:{
    
      height: 100,
      justifyContent:"center"
  },
  underlay:{ 
    ...StyleSheet.absoluteFillObject,
    justifyContent:"center",
    
},
picture:{ 
  ...StyleSheet.absoluteFillObject,
  borderBottomRightRadius: 75,
  width: undefined,
  height: undefined,

},
  title:{
    fontSize: 80,
    fontFamily: "SFProText-Bold",
    color:"white",
    textAlign:"center",
    lineHeight: 80

  }
})

interface SlideProps {
  label: string;
  right?: boolean;
  picture?: Any;
}

const Slide = ({label, right ,picture }: SlideProps) => {
  const transform = [
      {translateY: (SLIDE_HEIGHT - 100) / 2},
      {translateX: right ? (width/2)-50 : (-width/2)+50},
      {rotate: right ? "-90deg" : "90deg"}

  ];
  return (
    <View style={styles.container} >
       <View style={styles.underlay} >
         <Image source={picture} style={styles.picture} />
       </View>
      <View style={[styles.titleContainer,{transform}]} >
      <Text style={styles.title} >{label}</Text>
      </View>
    </View>
  )
}

export default Slide
