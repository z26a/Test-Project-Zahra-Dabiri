import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import React,{Component} from 'react';
import MapView, { PROVIDER_GOOGLE , Marker }  from 'react-native-maps';
// import Carousel from 'react-native-snap-carousel';
import {
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
  Animated,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import LinearGradient from 'react-native-linear-gradient';


export default class PostsDetails extends Component{
  constructor(props){
    super(props)
     this.state={

      isLoad:true,
dataSource:[],
      
      id:0,
title:"",
      body:"",
      comments:[],
      temp:[],
    
  }


}


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then((response) => response.json())
  .then((responseJson) => {
  this._parseResponse(responseJson)
      this.setState({ isLoad:false})
   
  })
  .catch((error) => {
    console.error(error);
  });

  console.log("comments:"+this.state.comments)

}


  _parseResponse = (result) => {
    var temp = this.state.dataSource
    for (var i = 0; i < result.length; i++) {
      if (result[i].postId == this.state.id) {
        temp.push(result[i])
      }
    }

    console.log(this.state.comments)
        this.setState({ comments: temp })
    
      }
 




  render(){
    const { navigation } = this.props;
    this.state.id = navigation.getParam('postId', 'NO-ID')
    console.log(this.state.id)
    this.state.title=navigation.getParam('postTitle','NO-TITLE')
    this.state.body=navigation.getParam("postBody","NO-BODY")
   if(this.state.isLoad)
    return (<ActivityIndicator/>)
    return(
      <SafeAreaView>
      {/* <LinearGradient style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height * 0.08,
        justifyContent: "center"
      }}
        colors={["#5C28CA", "#8C6FC8"]}
      >
        <Text style={{ fontSize: 20, color: "white", marginLeft: 20 }}>All Posts</Text>
      </LinearGradient> */}

<LinearGradient style={{
        width: Dimensions.get("window").width*0.85,
        justifyContent: "center",
        marginVertical:20,
        alignSelf:"center",
        paddingHorizontal: 8, paddingVertical: 5
      }}
        colors={["#5C28CA", "#8C6FC8"]}
      >
        <Text>{this.state.title}</Text>
            <View style={{
              backgroundColor: "white", width: "93%", marginVertical: 5,
              height: 1
            }}></View>
            <Text>{this.state.body}</Text>
      </LinearGradient> 


      <FlatList contentContainerStyle={{ alignItems: "center",
       }}
      style={{marginBottom:200}}
        data={this.state.comments}
        renderItem={({ item }) =>
          
          <LinearGradient style={{
            width: Dimensions.get("window").width * 0.85,
            marginTop: 20, paddingHorizontal: 8, paddingVertical: 5
          }}
            colors={["#F700BC", "#F334C5", "#F360D0","#F484D9"]}>
            <Text>{item.name}</Text>
            <Text>{item.email}</Text>
            <View style={{
              backgroundColor: "white", width: "93%", marginVertical: 5,
              height: 1
            }}></View>
            <Text>{item.body}</Text>
          </LinearGradient>

        }
      > 


    </FlatList>
    </SafeAreaView>

  )



  
  }
 
}








const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  opacity1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },

});
