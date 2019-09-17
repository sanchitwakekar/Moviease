/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// eslint-disable-next-line prettier/prettier
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './Screens/HomeScreen';


import InformationScreen from './Screens/InformationScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import { createStore, applyMiddleware } from 'redux';
import { rootreducer } from './Reducers';
import { RootSaga } from './middleware/index';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';


const saga = createSagaMiddleware();

const store = createStore(rootreducer, applyMiddleware(saga));
saga.run(RootSaga);

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Information: { screen: InformationScreen },
  //Profile: { screen: ProfileScreen }, 
});
const Navigator = createAppContainer(MainNavigator);
class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}



export default App;