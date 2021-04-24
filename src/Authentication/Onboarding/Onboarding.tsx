import React from 'react'
import { Dimensions, StyleSheet, View , Text, Alert,Image} from 'react-native'
//import { ScrollView } from 'react-native-gesture-handler'
import Slide,{SLIDE_HEIGHT} from './Slide'
import SubSlide from './subSlide'
//import { useValue } from "react-native-redash";
//import {usePanGestureHandler} from  "react-native-redash/lib/module/v1";
//import { useValue} from 'react-native-redash'
//import { useValue } from  "react-native-redash";
//import { onScrollEvent } from "react-native-redash";
import Animated, { divide, interpolateColors, multiply, useValue } from 'react-native-reanimated';
import { useRef } from 'react'
import Dot from "./Dot"
import TabNavigation from './TabNavigation';
import MainStackNavigator from '../../Navigation/StackNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../Welcome';

//import onScrollEvent from 'react-native-redash';


interface Onboarding {
   navigation: any
}

const {width } = Dimensions.get("window");
 const BORDER_RADIUS = 75;
const slides = [
    {subtitle:"Luffy", description:" Best anime"},
    {subtitle:"Zoro", description:" Best anime"},
    {subtitle:"Sanji", description:" Best anime"},
    {subtitle:"Nami", description:" Best anime"}
];


const Onboarding = ({ navigation }: Onboarding) => {

  

const scroll = useRef<Animated.ScrollView>(null);
const x = new Animated.Value(0)
 
    return (
        
        <View style={styles.container}> 
         
            <Animated.View style={styles.slider } >
                <Animated.ScrollView 
                ref={scroll}
                horizontal 
                snapToInterval={width} 
                decelerationRate="fast" 
                showsHorizontalScrollIndicator={false} 
                bounces={false}
                // {...{onScroll}}
                onScroll= {(e)=>{
                    x.setValue(e.nativeEvent.contentOffset.x)
                }}
                >
                    
                    <Slide label="Luffy"  picture={require('../../../assets/1.0.png')}/>
                    <Slide label="Zoro" picture={require('../../../assets/2.0.png')} right/>
                    <Slide label="Sanji" picture={require('../../../assets/3.png')} />
                    <Slide label="Nami" right picture={require('../../../assets/4.png')} />
                {/* {slides.map(({title},index) =>(
                    <Slide key={index} right={!!(index %)} {...{title}} />
                ))} */}

                </Animated.ScrollView>
            </Animated.View>

                            {/* everything down is footer */}

                <View style={styles.footer} >
                    <View  style={styles.footerContent}>
                         <View style = {styles.pagination} >
                                {slides.map((_,index) => (
                                // <Dot  key={index} currentIndex={divide(x,width)} {...{index}} />
                                <Dot  key={index} currentIndex={divide(x,width)} {...{index}} />
                                ))}
                            </View>
                           
                        <Animated.View 
                        style={{
                            flex:1,
                            flexDirection:"row",
                            width: width * slides.length,
                            transform:[{ translateX: multiply(x,-1)}],
                        }} >
                           {/* //add here bottom tab */}
                            {slides.map(({subtitle, description},index)=>{
                                const last = index===slides.length-1;
                                return (
                                    <SubSlide 
                                    key={index}
                                    onPress={()=>{
                                           if (last) {
                                            //    this.props.navigation.navigate('Welcome')
                                            navigation.navigate("login")
                                            //console.log("hi")
                                           } else {
                                            scroll.current?.getNode().scrollTo({x: width * (index + 1) , animated: true})
                                           }  

                                        
                                    }}
                                    
                                   
                                    {...{subtitle,description,last}}
                                    />  
                                )
                            }
                        )}
                        
                        </Animated.View>
                        
                     </View>
                     
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"white"
    },
    slider:{
        height: SLIDE_HEIGHT,
        borderBottomRightRadius:BORDER_RADIUS,
        backgroundColor:"peachpuff"
        
    },
    footer:{
        flex:1,
    },
    footerContent:{
       flex:1,
       backgroundColor: "white",
       borderTopLeftRadius: BORDER_RADIUS,
    },
    pagination:{
       ...StyleSheet.absoluteFillObject,
       height: BORDER_RADIUS,
       flexDirection: "row",
       justifyContent: "center",
       alignItems:"center",
     }
    
});


export default Onboarding
