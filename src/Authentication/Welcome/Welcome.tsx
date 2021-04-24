import React, { Component } from 'react'
import { Alert ,StyleSheet, Text, View,TextInput} from 'react-native';
import Button from  '../../Components/Button'



interface Welcomeprop {
  navigation: any
}

export class Welcome extends Component <Welcomeprop> {
 
  constructor(props: Welcomeprop)
  {
      super(props);
      this.state ={
          
          number:'',
          password:'',
          numberError:'',
          passwordError:'',
      }
  }


  Submit()
{

  if(this.state.number=="")
  {
    Alert.alert(  
      'Enter All Fields',  
      'Enter valid phone number and password for login',  
      [  
          {  
              text: 'Cancel',  
              onPress: () => console.log('Cancel Pressed'),  
              style: 'cancel',  
          },  
          {text: 'OK', onPress: () => console.log('OK Pressed')},  
      ]  
  );  
 
  }
  if(this.state.password=="")
  {
  //  console.warn("enter all fields")
      Alert.alert(  
        'Enter All Fields',  
        'Enter valid phone number and password for login',  
        [  
            {  
                text: 'Cancel',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {text: 'OK', onPress: () => console.log('OK Pressed')},  
        ]  
    );   
  }
   else{
    this.props.navigation.navigate("Home")
    // if(((this.state.number) == (this.props.data.data.data.number))&&((this.state.password) == (this.props.data.data.data.password))) 
    // {
    //   console.log('loggedin');
    //   this.props.navigation.navigate('Movies')
     
    // }
    // else{console.log('not');}
   }
}

numberValidator(){
  if(this.state.number=="")
  {
    this.setState({numberError:"Phonenumber field cannot be empty"})
  }
  
  else 
  {
    this.setState({numberError:""})
  }
}

passwordValidator(){
  if(this.state.password=="")
  {
    this.setState({passwordError:"Password field cannot be empty"})
  }
  
  else 
  {
    this.setState({passwordError:""})
  }
}

  render() {
    return (

      <View style={styles.container} >
     

   <TextInput
      placeholder = "enter number"
      keyboardType="number-pad"
      onBlur={()=>this.numberValidator()}
      maxLength ={10}
      onChangeText={(text)=>{this.setState({number:text})}}
      style={{borderWidth:2,borderColor:'skyblue',margin:20}}
      />
     
     <Text style={{color:'red',marginLeft:20}} >{this.state.numberError}</Text>


   <TextInput
      placeholder = "enter password"
      onBlur={()=>this.passwordValidator()}
      secureTextEntry={true}
      onChangeText={(text)=>{this.setState({password:text})}}
      style={{borderWidth:2,borderColor:'skyblue',margin:20}}
      />

    <Text style={{color:'red',marginLeft:20}} >{this.state.passwordError}</Text> 

      {/* <View style={{margin:20}} >
          <Button title="Login" onPress={()=>{this.Submit()}}/>
          </View>

          <View style={{margin:20}} >
          <Button title="Register"/>
        </View> */}
  <View style={{alignItems: "center"}}>
        <Button  label= "Login" 
             onPress={()=>{this.Submit()}}
                  />
</View>
  </View>
      
      // <View >
      //   <Text></Text>
      //   <Button
      //     title="button"
      //     onPress={() =>
      //       this.props.navigation.navigate('Friends')
      //     }
      //   />
      // </View>
    );
  }
}


const styles = StyleSheet.create({

  container:{
    
    flex: 1,
    alignItems: "stretch", 
     justifyContent:"center"
     
  }
});

export default Welcome
