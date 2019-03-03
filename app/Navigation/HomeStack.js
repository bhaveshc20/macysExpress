import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../Screens/HomeScreen';
import ProductListStack from './ProductListStack';
import { Icon } from 'react-native-elements';

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    ProductListSt: ProductListStack
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home';
        } else if (routeName === 'ProductListSt') {
          iconName = 'ios-list';
        } 
        return (
          <Icon
            name={iconName}
            type="ionicon"
            color={focused ? '#1A8F85' : 'gray'}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#1A8F85',
      inactiveTintColor: 'gray',
      showLabel: false,
      tabStyle: {
        padding: 0, margin: 0,
      },
      style: {
        backgroundColor: 'white',
      },
    },
    navigationOptions: {
      header: null
    }
  }
);

export default TabNavigator;
