import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import searchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const AppNavigator = createStackNavigator(
  {
      Search: searchScreen,
      ResulShow: ResultShowScreen,
  },
  {
      initialRoutName: 'Search',
      defaultNavigationOptions: {
          title: 'Busqueda de negocios'
      }
  }
);

const styles = StyleSheet.create({});
export default createAppContainer(AppNavigator);;



