import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import CategoriesScreen from '../Screens/CategoriesScreen';
import ProductScreen from '../Screens/ProductScreen';

const SettingsStack = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    Products: {
      screen: ProductScreen
    }
  },
  {
    initialRouteName: 'Categories'
  }
);

export default SettingsStack;
