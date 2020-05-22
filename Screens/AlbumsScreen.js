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






export default class AlbumsScreens extends Component{
  constructor(props){
    super(props)
     this.state={
      responseArray:[],
      isLoad:true,
      saveIndex:{},
      dataSource:[],
      finalDataSource:[],
      
    
  }


}


componentDidMount(){
//   fetch('https://safarbe.com/api/it-day-by-day-timeline/128/')
//   .then((response) => response.json())
//   .then((responseJson) => {
  
//       this.setState({responseArray:responseJson.days, isLoad:false})
//       var array=this.parseResponse(this.state.responseArray);
//       this.setState({finalDataSource: array, isLoad:false})
//       console.log(this.state.finalDataSource)
   
//   })
//   .catch((error) => {
//     console.error(error);
//   });

}


  parseResponse = (result) => {
    for (var i = 0; i < result.length; i++) {
      for (var j = 0; j < result[i].places.length; j++) {
        //We could do this directly: title:result[i].places[j].place.title
        //id:result[i].places[j].place.id
        //image:title:result[i].places[j].place.top_image ,...

        var holderObject1 = {}
        var holderObject2 = {}
        var holderObject3 = {}
        holderObject1 = result[i]
        // console.log(holderObject1)
        holderObject2 = holderObject1.places[j]
        // console.log(holderObject2)
        holderObject3 = holderObject2.place
        // console.log(holderObject3)
        var myObject = {
          title: holderObject3.title,
          id: holderObject3.id,
          image: holderObject3.top_image,
          lat: holderObject3.lat,
          lng: holderObject3.lng,
          summary: holderObject3.summary
        }
        var temp = this.state.dataSource
        temp.push(myObject)
        this.setState({ dataSource: temp })
    
      }
    }
    return (this.state.dataSource)
  }


  carouselSnap=(index)=>{
   
    //   objectOfArray = new Object(); 
    //  objectOfArray=this.state.finalDataSource[index];
 const objectOfArray=this.state.finalDataSource[index]
 this.setState({saveIndex:objectOfArray})   
 this.myref2map.animateToRegion(
      {
        
        latitude: objectOfArray.lat,
        longitude: objectOfArray.lng,
        latitudeDelta: 0.0922,  
        longitudeDelta: 0.0421
      },

     
    //  350
    );

  

  }









  render(){
//    if(this.state.isLoad)
//     return (<ActivityIndicator/>)
    return(
      <View style={{flex:1}}>
        <MapView 
        ref={map => this.myref2map = map}
        style={{
          width: Dimensions.get('window').width,
          height: 460
        }}
          showsUserLocation={true}
          showsMyLocationButton={true}
          zoomEnabled={true}
          initialRegion={{

            latitude: 37.280834,   
            longitude: 49.583057,  
            latitudeDelta: 0.0922,  
            longitudeDelta: 0.0421,  
          }} >

{/* {this.state.finalDataSource.map((item)=>{
  let color=""
   if (item.id == this.state.saveIndex.id)
     {color='red' 
  console.log(item.id,this.state.saveIndex.id)
    } 
      else {color = '#6E78CF' }
  console.log(color)
      
        return(
          <Marker 
           //key={'${item.id}-${color}'}
          key={`${item.id}-${item.id==this.state.saveIndex.id ? 'active':'inactive'}`}
         
          pinColor={color}
          
          coordinate={{ latitude:item.lat, longitude:item.lng }}  
          title={item.title}  
         

         
          
          
          // description={"Java Training Institute"}  
        />
        
        )

  }
)} */}
  
        </MapView>
      {/* <Carousel
              
              ref={(c) => { this._carousel = c; }}
              data={this.state.finalDataSource}
              renderItem={({ item }) => (<TouchableOpacity style={{flex:1,flexDirection:"row-reverse",backgroundColor:"#FFFFFF",
              alignItems:"center", borderRadius:7,margin:5 , borderColor:"#6E78CF", borderWidth:3}}
              // onPress={() => this.props.navigation.navigate('Details',{itemId:item.id})}
              onPress={() => this.props.navigation.navigate('Details',{picture:item.image,summary:item.summary})}
              
              >
            
     
               <Image source={{uri:item.image}}
                style={{
                 width: '50%',
                 height: 80,
                 margin: 7,
                 borderRadius: 7
               }} />
                  
              
             <Text style={{font:12}}>{item.title}</Text>
             
             </TouchableOpacity>
             
     
               )}
               
               sliderWidth={Dimensions.get('window').width}
               itemWidth={245}
               onSnapToItem={index => this.carouselSnap(index)}
            /> */}






      </View>

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
