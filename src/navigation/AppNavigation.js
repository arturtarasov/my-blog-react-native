import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'

import { MainScreen } from '../sceens/MainScreen';
import { PostScreen } from '../sceens/PostScreen';
import { THEME } from '../theme';
import { BookedScreen } from '../sceens/BookedScreen'

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen
    }
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
    }
  }
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
    }
  }
)

const BottomNavigator = createBottomTabNavigator({
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor}/>
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor}/>
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: THEME.MAIN_COLOR
  }
})

export const AppNavigation = createAppContainer(BottomNavigator);
