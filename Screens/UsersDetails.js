

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

import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';

import{Icon, Right, Left, Row} from 'native-base';

export default class UsersDetails extends Component{
  constructor(props){
    super(props)
     this.state={
      responseArray:[],


       isLoad: true,
       userId: 0,
       userDetail: {},
       usersList:[],
       postsList:[],
       albumsList:[],
       todosList:[],


      
    
  }


}


componentDidMount=async()=>{

var temp1=[]
var temp2=[]
var temp3=[]
var temp4=[]


  await fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((responseJson) => {
   
   
    this._parseResponse1(responseJson)
    
    
  })



  .catch((error) => {
    console.error(error);
  });



  await fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((responseJson) => {
  
    this._parseResponse2(responseJson)
    
  })
  .catch((error) => {
    console.error(error);
  });


  await fetch('https://jsonplaceholder.typicode.com/albums')
  .then((response) => response.json())
  .then((responseJson) => {
  
    this._parseResponse3(responseJson)
  

  })
  .catch((error) => {
    console.error(error);
  });


  await fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json())
  .then((responseJson) => {
  
    this._parseResponse4(responseJson)

  })
  

  .catch((error) => {
    console.error(error);
  });

  this.setState({isLoad:false})



console.log(this.state.userDetail)

}





  _parseResponse1 =  (usersList) => {

    console.log("usersList"+usersList)

    var tempUser={}

    for (var i = 0; i < usersList.length; i++) {
      if (this.state.userId == usersList[i].id) {

        var profileObject = {
          name: usersList[i].name,
          uname: usersList[i].username,
          email: usersList[i].email,
          lat: usersList[i].address.geo.lat,
          lng: usersList[i].address.geo.lng,
          address: `${usersList[i].address.suite}, ${usersList[i].address.street}, ${usersList[i].address.city}`
        }

      }
    }

    tempUser=profileObject
    this.setState({usersList:tempUser})
  }

  _parseResponse2 =  (postslist) => {

    var tempPosts=[]

    for (var i = 0; i < postslist.length; i++) {
      if (this.state.userId == postslist[i].userId) {

        tempPosts.push(postslist[i].title)

      }
    }

   
this.setState({postsList:tempPosts})
  }


  
  _parseResponse3 =  (albumsList) => {


    var tempAlbums=[]

    for (var i = 0; i < albumsList.length; i++) {
      console.log(albumsList[i].userId)
      if (this.state.userId == albumsList[i].userId) {

        tempAlbums.push(albumsList[i].title)

      }
    }
    this.setState({albumsList:tempAlbums})
  }
 

  _parseResponse4 =  (todosList) => {

    var tempToDos=[]

    for (var i = 0; i < todosList.length; i++) {
      if (this.state.userId == todosList[i].userId) {

        tempToDos.push({title:todosList[i].title,completed:todosList[i].completed})

      }
    }

    this.setState({todosList:tempToDos})

var finalObject={profile: this.state.usersList, posts:this.state.postsList, 
  albums:this.state.albumsList, todos: this.state.todosList }

    this.setState({userDetail:finalObject})
    
  }







  render(){
    const { navigation } = this.props;
    this.state.userId = navigation.getParam('userId', 'NO-ID')
    console.log(this.state.userId)
    console.log(this.state.userDetail)
    
   if(this.state.isLoad)
    return (<ActivityIndicator/>)
    return(
      <ScrollView contentContainerStyle={{alignItems:"center"}}>

<LinearGradient style={{marginVertical:20,
          width: Dimensions.get("window").width*0.90,
          height: Dimensions.get("window").height * 0.18,
          justifyContent: "center",
          paddingVertical:5,
          paddingHorizontal:5
        }}
          colors={["#5C28CA", "#8C6FC8"]}
        >
      <Text style={{ fontSize: 20, color: "white"}}>User's Profile</Text>
      <Text>{`Name: ${this.state.userDetail.profile.name}`}</Text>
      <Text>{`User Name: ${this.state.userDetail.profile.uname}`}</Text>
      <Text>{`Email: ${this.state.userDetail.profile.email}`}</Text>
      <Text>{`Address: ${this.state.userDetail.profile.address}`}</Text>
        </LinearGradient>



<Collapse

isCollapsed={true}
style={{elevation:1, alignSelf:"center"}}
>



<CollapseHeader>
<LinearGradient style={{marginTop:20,
          width: Dimensions.get("window").width*0.90,
          height: Dimensions.get("window").height * 0.08,
          justifyContent: "center",
          paddingVertical:5,
          paddingHorizontal:5
        }}
          colors={["#5C28CA", "#8C6FC8"]}
        >
      <Text style={{ fontSize: 20, color: "white"}}>Posts</Text>
   <Icon type={"AntDesign"} name={"arrowdown"}></Icon>

        </LinearGradient>

</CollapseHeader>


<CollapseBody>

<LinearGradient style={{
            width: Dimensions.get("window").width * 0.9,
           paddingHorizontal: 8, paddingVertical: 5
          }}
            colors={["#F700BC", "#F334C5", "#F360D0","#F484D9"]}>

    {this.state.userDetail.posts.map((item,key) => {
      return (

        <TouchableOpacity style={{
          width: '100%',
          flexDirection: "row", justifyContent: "space-between",
          marginTop:5

        }}>

          
            <Text style={{
              marginRight: Dimensions.get('window').width * 0.01,
          
            }}
            >{`${key}. ${item}`}</Text>
      
          

        </TouchableOpacity>
      )
    })}

  </LinearGradient>


</CollapseBody>


</Collapse>



<Collapse

isCollapsed={true}
style={{elevation:1, alignSelf:"center"}}
>



<CollapseHeader>
<LinearGradient style={{marginTop:20,
          width: Dimensions.get("window").width*0.90,
          height: Dimensions.get("window").height * 0.08,
          justifyContent: "center",
          paddingVertical:5,
          paddingHorizontal:5
        }}
        colors={["#F700BC", "#F334C5", "#F360D0","#F484D9"]}
        >
      <Text style={{ fontSize: 20, color: "white"}}>Albums</Text>
   <Icon type={"AntDesign"} name={"arrowdown"}></Icon>

        </LinearGradient>

</CollapseHeader>


<CollapseBody>

<LinearGradient style={{
            width: Dimensions.get("window").width * 0.9,
           paddingHorizontal: 8, paddingVertical: 5
          }}
            
            colors={["#5C28CA", "#8C6FC8"]}>

    {this.state.userDetail.albums.map((item,key) => {
      return (

        <TouchableOpacity style={{
          width: '100%',
          flexDirection: "row", justifyContent: "space-between",
          marginTop:5

        }}>

          
            <Text style={{
              marginRight: Dimensions.get('window').width * 0.01,
          
            }}
            >{`${key}. ${item}`}</Text>
      
          

        </TouchableOpacity>
      )
    })}

  </LinearGradient>


</CollapseBody>


</Collapse>



<Collapse

isCollapsed={true}
style={{elevation:1, alignSelf:"center"}}
>



<CollapseHeader>
<LinearGradient style={{marginTop:20,
          width: Dimensions.get("window").width*0.90,
          height: Dimensions.get("window").height * 0.08,
          justifyContent: "center",
          paddingVertical:5,
          paddingHorizontal:5
        }}
          colors={["#5C28CA", "#8C6FC8"]}
        >
      <Text style={{ fontSize: 20, color: "white"}}>ToDos</Text>
   <Icon type={"AntDesign"} name={"arrowdown"}></Icon>

        </LinearGradient>

</CollapseHeader>


<CollapseBody>

<LinearGradient style={{
            width: Dimensions.get("window").width * 0.9,
           paddingHorizontal: 8, paddingVertical: 5
          }}
            colors={["#F700BC", "#F334C5", "#F360D0","#F484D9"]}>

    {this.state.userDetail.todos.map((item,key) => {
      return (

        <TouchableOpacity style={{
          width: '100%',
          flexDirection: "row",
          marginTop:5

        }}>

          
            <Text style={{
              marginRight: Dimensions.get('window').width * 0.01,
          
            }}
            >{`${key}. ${item.title}- Completed: ${item.completed}`}</Text>


      
          

        </TouchableOpacity>
      )
    })}

  </LinearGradient>


</CollapseBody>


</Collapse>


<LinearGradient 
style={{height:Dimensions.get("window").height*0.4 , marginTop:20}}
colors={["#F700BC", "#F334C5", "#F360D0","#F484D9"]}>
  <Text style={{height:'13%', fontSize:20,color: "white",
padding:5}}>Location</Text>
        <MapView 
        ref={map => this.myref2map = map}
        style={{
          width: Dimensions.get('window').width*0.9,
          height: "100%"
        }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          zoomEnabled={true}
          initialRegion={{

            latitude:Number(this.state.userDetail.profile.lat),  
            longitude:Number(this.state.userDetail.profile.lng),  
            latitudeDelta:50,   
            longitudeDelta: 50,  
          }}
           >

<Marker 
        
          pinColor={"red"}
          coordinate={{ latitude:Number(this.state.userDetail.profile.lat), longitude:Number(this.state.userDetail.profile.lng) }}  
          title={this.state.userDetail.uname}  

        />

        </MapView>

</LinearGradient>


      </ScrollView>

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
