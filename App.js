/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React,{Component} from 'react';
import {
  SafeAreaView,
  Button,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  // AsyncStorage,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';


import {Icon} from 'native-base'
// import {applyMiddleware,createStore} from 'redux';
// import AsyncStorage from '@react-native-community/async-storage';
// import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
// import {persistReducer,persistStore as persistStoreRaw} from "redux-persist";
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';




import PostsScreen from './Screens/PostsScreen'
import PostsDetails from './Screens/PostsDetails'
import AlbumsScreen from './Screens/AlbumsScreen'
import AlbumsPictures from './Screens/AlbumsPictures'
import UsersScreen from './Screens/UsersScreen'
import UsersDetails from './Screens/UsersDetails'

// import reducers from './Reducers/Index'


// const persistConfig={
// key:'root',
// config:AsyncStorage,
// stateReconciler:autoMergeLevel2
// }

// const createStoreWithMiddleware=applyMiddleware(thunk,createStore);
// const persistedReducer=persistReducer(persistConfig,reducers);
// const store=createStoreWithMiddleware(persistedReducer)
// const persistStore=storeToPersist=>
// new Promise(resolve=>{persistStoreRaw(storeToPersist,undefined,()=>{
//   registerScreens(storeToPersist,Provider);
//   resolve();

// })

// })


const PostsStack=createStackNavigator(
{

  PostsScreen:{
    screen:PostsScreen,
    navigationOptions:{headerShown:false}
  },
  PostsDetails:{
    screen:PostsDetails,
    // navigationOptions:{headerShown:false}
  },

}

)


const AlbumsStack=createStackNavigator(
  {
  
    AlbumsScreen:{
      screen:AlbumsScreen,
      navigationOptions:{headerShown:false}
    },
    AlbumsPictures:{
      screen:AlbumsPictures,
      // navigationOptions:{headerShown:false}
    },
  
  }
  
  )



  const UsersStack=createStackNavigator(
    {
    
      UsersScreen:{
        screen:UsersScreen,
        navigationOptions:{headerShown:false}
      },
      UsersDetails:{
        screen:UsersDetails,
        // navigationOptions:{headerShown:false}
      },
    
    }
    
    )



const BottomNavigator =createMaterialBottomTabNavigator({

Posts:{
  screen: PostsStack,
  navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon type="Octicons" name="comment"
    
  
      style={{ fontSize: 25 , color:tintColor}}
      
       />

  }
}
,

Albums:{
  screen: AlbumsStack,
  navigationOptions: {
    tabBarIcon: ({tintColor}) => <Icon type="Ionicons" name="md-images"
    
        
        style={{ fontSize: 27, color: tintColor }}

      />

    }
  }
  ,

  Users: {
    screen: UsersStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon type="Feather" name="user"

        
        style={{ fontSize: 25, color: tintColor }}

      />
      
    }
  }





}
  ,
  {
    // tabBarOptions: {
      barStyle: { backgroundColor: '#5C28CA' },
      activeColor: "white",
      inactiveColor: "black",
      showLabel: false,
      showIcon: true,
      // indicatorStyle
    // }

  }
)


const AppContainer = createAppContainer(BottomNavigator);


class App extends Component{
  constructor(props)
  {   
    super(props)
    this.State={
   
  }
 
  }

  render(){
    return( 

<AppContainer/>

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
});

export default App;
