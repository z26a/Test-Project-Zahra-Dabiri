

import React,{Component} from 'react';

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
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import LinearGradient from 'react-native-linear-gradient';


export default class UsersScreen extends Component{
  constructor(props) {
    super(props)
    this.state = {
      responseArray: [],
      isLoad: true,
      usersList: [],

    }


}


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((responseJson) => {
  
    this.setState({usersList: responseJson, isLoad:false})
   console.log(this.state.usersList)
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
          <Text style={{ fontSize: 20, color: "white", marginLeft: 20 }}>Users' List</Text>
        </LinearGradient>


       <FlatList contentContainerStyle={{ alignItems: "center",
       }}
      style={{marginBottom:60,marginTop:10}}
        data={this.state.usersList}
        renderItem={({ item }) =>
          
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("UsersDetails",{userId:item.id})}> 
          <LinearGradient style={{
            width: Dimensions.get("window").width * 0.85,
            marginTop: 20, paddingHorizontal: 8, paddingVertical: 5
          }}
            colors={["#F700BC", "#F334C5", "#F360D0","#F484D9"]}>
            <Text style={{fontSize:16, marginBottom:5}}>{item.username}</Text>  

            <Text>{item.name}</Text>
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
