import React, { Component } from 'react'
import { Text, View ,FlatList } from 'react-native'

interface Homeprops{

}

export class Home extends Component {
 constructor(props:Homeprops)
  {
    super(props);
    this.state ={
       data:[]
    }
  }

  componentDidMount(){
    this.apiCall();
  }

  async apiCall(){
   let resp = await fetch ('https://facebook.github.io//react-native/movies.json')
   let respJson = await resp.json()
    
    this.setState({data:respJson.movies})
   
  }

  render() {
    return (
      <View>
        <Text> Home </Text>
        <FlatList
        data ={this.state.data}
        renderItem = {({item})=>
       <Text style={{fontSize:40,margin:15}} > {item.title} </Text>
      }
        />
      </View>
    )
  }
}

export default Home
