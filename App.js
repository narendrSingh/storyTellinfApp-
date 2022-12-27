import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import firebase from 'firebase';
import { firebaseConfig } from './config';

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashBoardScreen from './screens/DashBoardScreen';

if(!firebase.apps.lenght){
  firebase.initalizeApp(firebaseConfig);
}else{
  firebase.app();
}

const AppSwitchNavigator=createSwitchNavigator({
  LoadingScreen:LoadingScreen,
  LoginScreen:LoginScreen,
  DashBoardScreen:DashBoardScreen
})

export default function App() {
  return (

    <AppNavigator/>
  )
}