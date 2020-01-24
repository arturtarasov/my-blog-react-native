import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import { MainScreen } from '../sceens/MainScreen';
import { PostScreen } from '../sceens/PostScreen';
import { THEME } from '../theme';
import { BookedScreen } from '../sceens/BookedScreen'

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
  }
}

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen
  },
  navigatorOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  navigatorOptions
)

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'Все',
      tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor}/>
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Избранное',
      tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor}/>
    }
  }
}

const BottomNavigator = 
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(bottomTabsConfig, {
      activeTintColor: '#fff',
      shifting: true,
      barStyle: {
        backgroundColor: THEME.MAIN_COLOR
      }
    }) 
    : createBottomTabNavigator(
      bottomTabsConfig,
      {
        tabBarOptions: {
          activeTintColor: THEME.MAIN_COLOR
        }
      }
    )

export const AppNavigation = createAppContainer(BottomNavigator);
