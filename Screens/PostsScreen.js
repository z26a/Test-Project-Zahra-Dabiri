//Empty App for Navigation Project
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */





import LinearGradient from 'react-native-linear-gradient';

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
  ActivityIndicator,
  Animated,
  scrollView,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';






export default class PostsScreen extends Component{
  constructor(props){
    super(props)
     this.state={
      responseArray:[],
      isLoad:true,
      saveIndex:{},
      dataSource:[],
      posts:[],
      
    
  }


}


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((responseJson) => {
  
      this.setState({posts: responseJson, isLoad:false})
   
  })
  .catch((error) => {
    console.error(error);
  });

}





  render(){
   if(this.state.isLoad)
    return (<ActivityIndicator/>)
    return(
      <SafeAreaView>
        <LinearGradient style={{
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height * 0.08,
          justifyContent: "center"
        }}
          colors={["#5C28CA", "#8C6FC8"]}
        >
          <Text style={{ fontSize: 20, color: "white", marginLeft: 20 }}>All Posts</Text>
        </LinearGradient>
        <FlatList style={{marginBottom:20}} 
        contentContainerStyle={{ alignItems: "center"}}
          data={this.state.posts}
          renderItem={({ item }) => <TouchableOpacity

          onPress={()=>this.props.navigation.navigate("PostsDetails",{postId:item.id,postTitle:item.title,
          postBody:item.body})}>

            <LinearGradient style={{
              width: Dimensions.get("window").width * 0.85,
              height:Dimensions.get("window").height*0.07,
              marginTop: 20, paddingHorizontal: 8,justifyContent:"center"
            }}
              colors={["#F700BC", "#F334C5", "#F360D0","#F484D9"]}>
              <Text>{`${item.id}. ${item.title}`}</Text>
             
            </LinearGradient>
          </TouchableOpacity>
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

